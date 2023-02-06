interface UrlCatalogue {
    catalogue: string;
    name: string;
    suffix: string;
}
/**
 * 去掉文件，获取文件目录
 * @param str
 * @returns
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
