import { getStartSames } from '../basic/string/getStartSames';

/**
 * 获取相对当前文件的引入地址
 * @param {string} url 当前文件完整地址
 * @param {string} imp 要引入的完整地址
 * @returns {string} 相对引入地址
 */
export function getImportUrl(
    url: string,
    imp: string,
): string {
    const arr = getStartSames(url, imp);
    const l = arr[1].split(/\\|\//).length - 1;
    let ds = ['./'];
    if (l > 0) {
        ds = [];
        for (let index = 0; index < l; index++) {
            ds.push('../');
        }
    }
    return ds.join('') + arr[2].replace(/\\/g, '/');
}
