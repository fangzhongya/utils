import { isArray } from "../array/isArray"

/**
 * 是否是对象
 * @param {*} objs
 */
export function isObject(obj: any): boolean {
    if (typeof obj == 'object') {
        return !isArray(obj);
    } else {
        return false;
    }
}