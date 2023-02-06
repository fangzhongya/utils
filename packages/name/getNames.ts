import { humpToLine } from './humpToLine';
import { lineToLargeHump } from './lineToLargeHump';
import { lineToSmallHump } from './lineToSmallHump';

/**
 * 获取三种方式名称 el-input ElInput elInput
 * @param {*} name
 * @returns
 */
export function getNames(name: string): Array<string> {
    const line = humpToLine(name);
    const upper = lineToLargeHump(line);
    const lower = lineToSmallHump(upper);
    return [line, upper, lower];
}
