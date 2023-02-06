import { getImportUrl } from './getImportUrl';

/**
 * 获取相对当前文件的引入地址，去掉了文件后缀
 * @param {string} url 当前文件完整地址
 * @param {string} imp 要引入的完整地址
 * @returns {string} 相对引入地址
 */
export function getImportUrlSuffix(
    url: string,
    imp: string,
): string {
    return getImportUrl(url, imp).replace(
        /\.([a-z|A-Z]+)$/,
        '',
    );
}
