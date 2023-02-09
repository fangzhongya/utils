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
    const ts = arr[0];
    if (!/[\\|\/]$/.test(ts)) {
        const regs = ts.match(/[\\|\/]([^\\|\/]*)$/);
        if (regs && regs.length > 0) {
            const a = regs[1];
            arr[0] = ts.substring(
                0,
                (regs.index as number) + 1,
            );
            arr[1] = a + arr[1];
            arr[2] = a + arr[2];
        }
    }
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
