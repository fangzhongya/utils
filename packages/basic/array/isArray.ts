

/**
 * 是否是数组
 * @param {*} objs
 */
export function isArray(obj: any): boolean {
    return (
        Object.prototype.toString.call(obj) ==
        '[object Array]'
    );
}