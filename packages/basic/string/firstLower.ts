/**
 * 首字母小写
 * @param {string} str 处理字符串
 * @returns {string}
 */
export function firstLower(str: string): string {
    return str.slice(0, 1).toLowerCase() + str.slice(1);
}
