// 小驼峰命名法 第一个单词首字母小写，剩下单词的首字母大写，如：firstName
// 大驼峰式命名规则：只要遇到单词，就首字母大写，使用构造函数来创建对象时，必须要用大驼峰式命名法来命名，如：FirstName
// -命名法：在每两个单词之间用-链接，这就是-命名法，如：first-name
// Small

// large

// hump
/**
 * 驼峰命名转 - 方式
 * @param {*} name
 * @returns
 */
export function humpToLine(name: string): string {
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
