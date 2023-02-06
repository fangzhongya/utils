/**
 * 去掉文件，获取文件目录
 * @param str
 * @returns
 */
export function getUrlCatalogue(str: string): string {
    const reg = /((\\|\/)([^\\|\/]+)(\.[a-z|A-Z]+))$/g;
    return str.replace(reg, '');
}
