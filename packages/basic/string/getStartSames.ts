/**
 * 获取头一样的
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
