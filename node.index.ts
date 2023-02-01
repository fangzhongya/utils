import * as fs from 'fs';
import { resolve, join } from 'path';

const config = {
    dir: './packages/',
    gene: 'index.ts',
};

interface FsReaddir {
    file: Array<string>,
    dirs: Array<string>,
}

function readdir(filePath: string): Promise<FsReaddir> {
    return new Promise((resolve, reject) => {
        //根据文件路径读取文件，返回文件列表
        fs.readdir(filePath, (err, files) => {
            if (err) {
                reject(err);
            } else {
                const lg = files.length;
                const dirs: Array<string> = [];
                const file: Array<string> = [];
                let i = 0;
                //遍历读取到的文件列表
                files.forEach((filename) => {
                    //获取当前文件的绝对路径
                    const filedir = join(filePath, filename);
                    //根据文件路径获取文件信息，返回一个fs.Stats对象
                    fs.stat(filedir, (eror, stats) => {
                        i++;
                        if (eror) {
                            console.log('获取文件stats失败', filedir);
                        } else {
                            const isFile = stats.isFile(); //是文件
                            const isDir = stats.isDirectory(); //是文件夹
                            if (isFile) {
                                file.push(filename);
                            }
                            if (isDir) {
                                dirs.push(filename);
                            }
                        }
                        if (i >= lg) {
                            const data: FsReaddir = {
                                file,
                                dirs
                            };
                            resolve(data);
                        }
                    });
                });
            }
        });
    })
}



function writeFile(url: string, str: string) {
    fs.writeFile(url, str, 'utf-8', () => { });
}


function init() {
    const url = resolve(process.cwd(), config.dir);
    write(url)

}

function write(url: string) {
    if (url) {
        readdir(url).then((data) => {
            const file = data.file;
            const dirs = data.dirs;
            writeIndex(url, file, dirs);
        }).catch(() => { });
    }
}

function writeIndex(url: string, file: Array<string>, dirs: Array<string>) {
    const arr: Array<string> = [];
    if (dirs) {
        dirs.forEach((name) => {
            arr.push(
                `export * as ${name} from './${name}';`,
            );
        })
    }
    if (file) {
        file.forEach((name) => {
            if (name != config.gene) {
                const wjmc = name.replace(/\.ts$/, '')
                arr.push(
                    `export * from './${wjmc}';`,
                );
            }
        })
    }
    writeFile(join(url, config.gene), arr.join('\n'));
    if (dirs) {
        dirs.forEach((name) => {
            write(join(url, name),)
        })
    }
}

init();
