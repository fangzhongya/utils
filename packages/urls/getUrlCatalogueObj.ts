interface UrlCatalogue {
    catalogue: string;
    name: string;
    suffix: string;
}
/**
 * 去掉文件，获取文件目录对象
 * @param str { 文件地址 }
 * @returns { UrlCatalogue } 目录对象
 * @returns { string } catalogue 当前目录值
 * @returns { string } name 文件名称
 * @returns { string } suffix 文件后缀
 */
export function getUrlCatalogueObj(
    str: string,
): UrlCatalogue {
    const reg = /(\\|\/)([^\\|\/]+)(\.[a-z|A-Z]+)$/g;
    const ml = str.replace(reg, '');
    let name = '';
    let suffix = '';
    const arr = reg.exec(str);
    if (arr) {
        name = arr[2];
        suffix = arr[3];
    }
    return {
        catalogue: ml,
        name,
        suffix,
    };
}
