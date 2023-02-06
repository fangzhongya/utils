/**
 * 获取头一样的
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
