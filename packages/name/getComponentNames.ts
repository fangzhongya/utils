import { humpToLine } from './humpToLine';
import { lineToLargeHump } from './lineToLargeHump';
import { lineToSmallHump } from './lineToSmallHump';

/**
 * 获取三种方式名称 el-input ElInput elInput
 * @param {*} name
 * @returns
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
