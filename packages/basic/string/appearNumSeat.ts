/**
 * 查询字符串出现第n次数的位置
 * @param {string} str 被查询的字符串
 * @param {string | RegExp} t 查询的字符串 或者 正则表达式
 * @param {number} n 第几次出现
 * @returns {number} 第n次出现时在字符串的位置 -1 表示没有查询到
 */
export function appearNumSeat(
    str: string,
    t: string | RegExp,
    n: number,
): number {
    let reg;
    if (typeof t == 'string') {
        reg = new RegExp(t, 'g');
    } else {
        reg = t;
    }
    let i = 0;
    let s = -1;
    let arr;
    while ((arr = reg.exec(str)) !== null) {
        i++;
        if (i >= n) {
            return arr.index;
        }
    }
    return s;
}
