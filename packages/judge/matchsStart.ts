/**
 * 判断字符串是否匹配 字符串采用前匹配
 * @param {string} key 当前字符串
 * @param { Array<string | RegExp> } matchs 匹配的字符串或者正则表达式数组
 * @returns {boolean} 空数组 true
 */
export function matchsStart(
    key: string,
    matchs?: Array<string | RegExp>,
): boolean {
    if (matchs && matchs.length > 0) {
        for (const value of matchs) {
            if (typeof value == 'string') {
                if (key.startsWith(value)) {
                    return true;
                }
            } else {
                if (value.test(key)) {
                    return true;
                }
            }
        }
        return false;
    } else {
        return true;
    }
}
