import { isArray } from '../array/isArray';
import { isObject } from './isObject';

/**
 * 是否 是对象并且不是数组
 * @param {any} obj 判断值
 * @returns {boolean}
 */
export function isObjectArray(obj: any): boolean {
    return isObject(obj) && !isArray(obj);
}
