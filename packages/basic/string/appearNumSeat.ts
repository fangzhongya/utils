/**
 * 查询字符串出现次数
 * @param {*} str
 * @param {*} t
 * @returns
 */
export function appearNumSeat(
    str: string,
    t: string | RegExp,
    n: number,
) {
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
