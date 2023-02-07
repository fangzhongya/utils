interface Objunkn {
    [key: string]: any;
}
/**
 * 数组对象去重
 * @param {Array} arr 要去重数组
 * @param {string} key 对象中的唯一key
 * @returns {Array }
 */
export function duplicateRemoval<T>(
    arr: Array<T>,
    key: string,
): Array<T> {
    const ks: Array<string> = [];
    const arrs: Array<T> = [];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index] as Objunkn;
        const v = element[key];
        if (!ks.includes(v)) {
            ks.push(v);
            arrs.push(arr[index]);
        }
    }
    return arrs;
}
