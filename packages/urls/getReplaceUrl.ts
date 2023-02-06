import { getStartSames } from '../basic/string/getStartSames';
import { appearNum } from '../basic/string/appearNum';
import { appearNumSeat } from '../basic/string/appearNumSeat';
/**
 * 以当前路径 生成对应的url地址
 * @param {string} url 要生成的完整地址
 * @param {string} add 生成的目录地址
 * @returns {string} 完整的url地址
 */
export function getReplaceUrl(
    url: string,
    add: string,
): string {
    const reg = /[\\|\/]/g;
    const arr = getStartSames(url, add);
    const uz = appearNumSeat(
        arr[1],
        reg,
        appearNum(arr[2], reg) + 1,
    );
    return add + arr[1].substring(uz);
}
