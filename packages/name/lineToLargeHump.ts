import { firstLower } from '../basic/string/firstLower';

/**
 * - 方式 转 大驼峰命名
 * @param name
 * @returns
 */
export function lineToLargeHump(name: string) {
    let arr = name.split('-');
    arr = arr.map((vs) => {
        return firstLower(vs);
    });
    return arr.join('');
}
