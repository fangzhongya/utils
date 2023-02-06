/**
 * 首字母大写
 * @param {string} str
 * @returns
 */
export function firstUpper(str: string): string {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
}
