/**
 * 获取文件后缀名称
 * @param {string } url 文件地址
 * @returns {string} 文件后缀
 */
export function getSuffix(url: string): string {
    const reg = /\.([a-z|A-Z]+)$/;
    const regs = reg.exec(url);
    if (regs && regs.length > 0) {
        return regs[1];
    }
    return '';
}
