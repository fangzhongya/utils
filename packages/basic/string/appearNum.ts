/**
 * 查询字符串出现次数
 * @param {*} str
 * @param {*} t
 * @returns
 */
export function appearNum(str: string, t: string | RegExp) {
    let reg = t;
    if (typeof t == 'string') {
        reg = new RegExp(t, 'g');
    }
    let arr = str.match(reg);
    let c = arr ? arr.length : 0;
    return c;
}
