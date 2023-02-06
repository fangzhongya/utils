/**
 * 比较两个字符串，获取前面一样的值
 * @param {string} str 比较字符串1
 * @param {string} val 比较字符串2
 * @returns {Array<string>} [前面一样的值, 字符串1不一样的值, 字符串2不一样的值]
 */
export function getStartSames(
    str: string,
    val: string,
): Array<string> {
    let s = '';
    const vs = [...val];
    let index = 0;
    for (; index < vs.length; index++) {
        const element = vs[index];
        if (element === str.charAt(index)) {
            s += element;
        } else {
            break;
        }
    }
    return [s, str.substring(index), val.substring(index)];
}
