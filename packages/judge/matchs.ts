import { matchsEnd } from './matchsEnd';
import { matchsStart } from './matchsStart';
import { matchsWhole } from './matchsWhole';
/**
 * 判断字符串是否匹配 总方法
 * @param {string} key 当前字符串
 * @param { Array<string | RegExp> } matchs 匹配的字符串或者正则表达式数组
 * @param {string} type 类型 'end' 后匹配，'start' 前匹配, 其他是全匹配
 * @returns {boolean} 空数组 true
 */
export function matchs(
    key: string,
    matchs?: Array<string | RegExp>,
    type?: string,
): boolean {
    switch (type) {
        case 'end':
            return matchsEnd(key, matchs);
        case 'start':
            return matchsStart(key, matchs);
        default:
            return matchsWhole(key, matchs);
    }
}
