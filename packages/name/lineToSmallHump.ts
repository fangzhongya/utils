import { firstUpper } from '../basic/string/firstUpper';
import { firstLower } from '../basic/string/firstLower';

/**
 * - 方式 转 小驼峰
 * @param { string } name 要转换的字符串
 * @returns { string } 转换后字符串
 */
export function lineToSmallHump(name: string) {
    let arr = name.split('-');
    arr = arr.map((vs) => {
        return firstLower(vs);
    });
    return firstUpper(arr.join(''));
}
