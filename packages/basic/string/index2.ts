
/**
 * 首字母大写
 * @param {string} vs
 * @returns string
 */
export function firstUpper(vs: string): string {
    return vs.slice(0, 1).toUpperCase() + vs.slice(1);
}
/**
 * 首字母小写
 * @param {string} vs
 * @returns string
 */
export function firstLower(vs: string): string {
    return vs.slice(0, 1).toLowerCase() + vs.slice(1);
}


/**
 * 获取-方式组件名称 el-input
 * @param {*} name
 * @returns
 */
export function getNmaeBar(name: string): string {
    const reg = /(([A-Z])([^A-Z]*))/g;
    let result;
    const arr: Array<string> = [];
    let i = 0;
    while ((result = reg.exec(name)) !== null) {
        if (i == 0 && result.index != 0) {
            arr.push(name.substring(0, result.index));
        }
        i++;
        arr.push(result[1].toLowerCase());
    }
    if (arr.length == 0) {
        return name;
    } else {
        let a = arr.join('-');
        a = a.replace(/[-]{2,}/g, '-');
        return a;
    }
}
