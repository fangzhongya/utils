/**
 * 查询字符串出现次数
 * @param {string} str 被查询的字符串
 * @param {string | RegExp} t 查询的字符串 或者 正则表达式
 * @returns {number} 出现的次数
 */
export function appearNum(
    str: string,
    t: string | RegExp,
): number {
    let reg = t;
    if (typeof t == 'string') {
        reg = new RegExp(t, 'g');
    }
    let arr = str.match(reg);
    let c = arr ? arr.length : 0;
    return c;
}
