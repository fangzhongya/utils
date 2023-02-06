/**
 * 首字母小写
 * @param { string } str
 * @returns
 */
export function firstLower(str: string): string {
    return str.slice(0, 1).toLowerCase() + str.slice(1);
}
