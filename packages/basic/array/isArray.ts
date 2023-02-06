/**
 * 是否是数组
 * @param {any} obj 判断值
 * @returns {boolean}
 */
export function isArray(obj: any): boolean {
    return (
        Object.prototype.toString.call(obj) ==
        '[object Array]'
    );
}
