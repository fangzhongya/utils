/**
 * 获取当前路径的最后一个目录名称
 * @param str { 文件地址 }
 * @returns { string } 目录名称
 */
export function getUrlCatalogueLast(str: string): string {
    const reg =
        /(\\|\/)([^\\|\/]+)(\\|\/)?(([^\\|\/]+)(\.[a-z|A-Z]+))?$/g;
    const arr = reg.exec(str);
    if (arr && arr.length > 0) {
        return arr[2];
    }
    return '';
}
