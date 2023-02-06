import { isArray } from '../array/isArray';

/**
 * 是否是对象
 * @param {any} obj 判断值
 * @returns {boolean}
 */
export function isObject(obj: any): boolean {
    if (typeof obj == 'object') {
        return !isArray(obj);
    } else {
        return false;
    }
}
