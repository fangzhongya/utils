/**
 * 去掉文件，获取文件目录
 * @param {string} str 地址
 * @returns {string} 目录
 */
export function getUrlCatalogue(str: string): string {
    const reg = /((\\|\/)([^\\|\/]+)(\.[a-z|A-Z]+))$/g;
    return str.replace(reg, '');
}
