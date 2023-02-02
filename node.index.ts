import {
    open,
    readdir,
    stat,
    writeFile,
    write,
    mkdir,
    // access,
    // constants,
} from 'node:fs';
import { resolve, join } from 'node:path';

const config = {
    dir: './packages/',
    gene: 'index.ts',
};

interface FsReaddir {
    file: Array<string>;
    dirs: Array<string>;
}

function fsReaddir(filePath: string): Promise<FsReaddir> {
    return new Promise((resolve, reject) => {
        //根据文件路径读取文件，返回文件列表
        readdir(filePath, (err, files) => {
            if (err) {
                reject(err);
            } else {
                const lg = files.length;
                const dirs: Array<string> = [];
                const file: Array<string> = [];
                if (lg) {
                    let i = 0;
                    //遍历读取到的文件列表
                    files.forEach((filename) => {
                        //获取当前文件的绝对路径
                        const filedir = join(
                            filePath,
                            filename,
                        );
                        //根据文件路径获取文件信息，返回一个fs.Stats对象
                        stat(filedir, (err, stats) => {
                            i++;
                            if (err) {
                                console.log(
                                    err
                                );
                            } else {
                                const isFile = stats.isFile(); //是文件
                                const isDir =
                                    stats.isDirectory(); //是文件夹
                                if (isFile) {
                                    file.push(filename);
                                }
                                if (isDir) {
                                    dirs.push(filename);
                                }
                            }
                            if (i >= lg) {
                                resolve({
                                    file,
                                    dirs,
                                });
                            }
                        });
                    });
                } else {
                    resolve({
                        file,
                        dirs,
                    });
                }
            }
        });
    });
}

// // 传入文件夹的路径看是否存在，存在不用管，不存在则直接创建文件夹
// /**
//  * 判断文件夹是否存在，不存在可以直接创建
//  * @param reaPath {String} 文件路径
//  * @returns {Promise<boolean>}
//  */
// function fsAccess(reaPath: string, callback?: () => void) {
//     try {
//         access(reaPath, constants.F_OK, (err) => {
//             if (err) {
//                 fsMkdir(reaPath, callback);
//             } else {
//                 if (callback) {
//                     callback();
//                 }
//             }
//         });
//     } catch (e) {
//         fsMkdir(reaPath, callback);
//     }
// }

/**
 * 异步地打开文件。详见 open(2)。 flags 可以是：
 * 以写入模式打开文件。文件会被创建（如果文件不存在）或截断（如果文件存在）。
 * @param {*} path
 * @param {*} json
 * @param {*} callback
 */
function fsOpen(
    path: string,
    json: string,
    callback?: () => void,
) {
    // 检查文件是否存在于当前目录，且是否可写。
    open(path, 'wx', (err, fd) => {
        if (err) {
            if (err.code === 'EEXIST') {
                writeFile(path, json, 'utf-8', (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        if (callback) callback();
                    }
                });
            } else {
                console.log(err);
            }
        } else {
            write(fd, json, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    if (callback) callback();
                }
            });
        }
    });
}
// 传入文件夹的路径看是否存在，存在不用管，不存在则直接创建文件夹
/**
 * 判断文件夹是否存在，不存在可以直接创建
 * @param reaPath {String} 文件路径
 * @returns {Promise<boolean>}
 */
function fsMkdir(reaPath: string, callback?: () => void) {
    // 不存在文件夹，直接创建 {recursive: true} 这个配置项是配置自动创建多个文件夹
    mkdir(reaPath, { recursive: true }, (err) => {
        if (err) {
            console.log(err);
        } else {
            if (callback) {
                callback();
            }
        }
    });
}

interface issObj {
    name: string;
    url: string;
}

let iss: Array<issObj> = [];

async function init() {
    const dirUrl = resolve(process.cwd(), config.dir);
    iss = [];
    await writes(dirUrl);
    if (iss.length > 0) {
        const issurl = resolve(
            process.cwd(),
            config.dir + 'iss',
        );
        const arr: Array<string> = [];
        iss.forEach(({ name, url }) => {
            const ust = url
                .replace(dirUrl, '')
                .replace(/\\/g, '/');
            arr.push(
                `export * from '..${ust + '/' + name}';`,
            );
        });
        fsMkdir(issurl, () => {
            fsOpen(
                join(issurl, config.gene),
                arr.join('\n'),
            );
        });
    }
}

function writes(url: string): Promise<boolean> {
    return new Promise(async (resolve) => {
        if (url) {
            const data = await fsReaddir(url);
            await writeIndex(url, data.file, data.dirs);
            resolve(true);
        } else {
            resolve(false);
        }
    });
}

function writeIndex(
    url: string,
    file: Array<string>,
    dirs: Array<string>,
): Promise<boolean> {
    return new Promise(async (resolve) => {
        const arr: Array<string> = [];
        if (dirs) {
            dirs.forEach((name) => {
                arr.push(
                    `export * as ${name} from './${name}';`,
                );
            });
        }
        if (file) {
            file.forEach((name) => {
                if (name != config.gene) {
                    const wjmc = name.replace(/\.ts$/, '');

                    arr.push(`export * from './${wjmc}';`);
                    if (
                        /^is[A-Z]([a-z|A-Z])+?$/.test(wjmc)
                    ) {
                        iss.push({
                            name: wjmc,
                            url,
                        });
                    }
                }
            });
        }
        fsOpen(join(url, config.gene), arr.join('\n'));
        if (dirs) {
            for (let i = 0; i < dirs.length; i++) {
                await writes(join(url, dirs[i]));
            }
        }
        resolve(true);
    });
}

init();
