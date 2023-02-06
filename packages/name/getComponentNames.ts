import { humpToLine } from './humpToLine';
import { lineToLargeHump } from './lineToLargeHump';
import { lineToSmallHump } from './lineToSmallHump';

/**
 * 组件 获取三种方式名称 el-input ElInput elInput
 * @param { string } name 要转换的字符串
 * @returns { Array<string> } 转换后的数组
 */
export function getComponentNames(
    name: string,
): Array<string> {
    if (name.includes('-')) {
        const line = humpToLine(name);
        const upper = lineToLargeHump(line);
        const lower = lineToSmallHump(upper);
        return [line, upper, lower];
    } else if (/[A-Z]/.test(name)) {
        const line = humpToLine(name);
        if (/^[A-Z]/.test(name)) {
            const upper = lineToLargeHump(line);
            const lower = lineToSmallHump(upper);
            if (line.includes('-')) {
                return [line, upper, lower];
            } else {
                return [name, lower];
            }
        } else {
            return [line, name];
        }
    } else {
        return [name];
    }
}
