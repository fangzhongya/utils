import { firstUpper } from '../basic/string/firstUpper';
import { firstLower } from '../basic/string/firstLower';

/**
 * - 方式 转 小驼峰
 * @param name
 * @returns
 */
export function lineToSmallHump(name: string) {
    let arr = name.split('-');
    arr = arr.map((vs) => {
        return firstLower(vs);
    });
    return firstUpper(arr.join(''));
}
