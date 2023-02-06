/**
 * 比较两个字符串，获取前面一样的值
 * @param {string} str 比较字符串1
 * @param {string} val 比较字符串2
 * @returns {string} 前面一样的值
 */
export function getStartSame(
    str: string,
    val: string,
): string {
    let s = '';
    let vs = [...val];
    for (let index = 0; index < vs.length; index++) {
        const element = vs[index];
        if (element === str.charAt(index)) {
            s += element;
        } else {
            break;
        }
    }
    return s;
}
