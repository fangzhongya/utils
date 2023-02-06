/**
 * 首字母大写
 * @param {string} str 处理字符串
 * @returns {string}
 */
export function firstUpper(str: string): string {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
}
