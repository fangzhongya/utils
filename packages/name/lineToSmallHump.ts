import { lineToLargeHump } from './lineToLargeHump';
import { firstLower } from '../basic/string/firstLower';

/**
 * - 方式 转 小驼峰命名
 * @param { string } name 要转换的字符串
 * @returns { string } 转换后字符串
 */
export function lineToSmallHump(name: string) {
    return firstLower(lineToLargeHump(name));
}
