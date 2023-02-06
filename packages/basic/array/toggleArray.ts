interface Objunkn {
    [key: string]: any;
}

/**
 * 判断数组值，如果存在就删除，如果没有就添加
 * @param {Array<Objunkn>} arr 当前数组
 * @param {Objunkn} obj 要处理的对象
 * @param {string} id 比对的对应属性名称
 * @returns {Array<Objunkn>} 判断后的数组值
 */
export function toggleArray(
    arr: Array<Objunkn>,
    obj: Objunkn,
    id: string,
): Array<Objunkn> {
    let varr = [];
    let is = true;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element[id] === obj[id]) {
            is = false;
        } else {
            varr.push(element);
        }
    }
    if (is) {
        varr.push(obj);
    }
    return varr;
}
