import { getImportUrl } from './getImportUrl';

/**
 *
 * @param url 当前文件完整地址
 * @param imp 要引入的完整地址
 * @returns string 获取相对的引入地址
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
