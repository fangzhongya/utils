interface Objunkn {
    [key: string]: any,
}

/**
 * 数组值，如果存在就删除，如果没有就添加
 * @param {*} objs
 * @param {*} id
 */
export function toggleArray(objs: Array<Objunkn>, arr: Objunkn, id: string): Array<Objunkn> {
    let varr = [];
    let is = true;
    for (let index = 0; index < objs.length; index++) {
        const element = objs[index];
        if (element[id] === arr[id]) {
            is = false;
        } else {
            varr.push(element);
        }
    }
    if (is) {
        varr.push(arr);
    }
    return varr;
}