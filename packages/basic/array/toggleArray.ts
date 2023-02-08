interface ObjUnkn {
    [key: string]: unknown;
}
/**
 * 判断数组值，如果存在就删除，如果没有就添加
 * @param {Array<T>} arr 当前数组
 * @param {Object} obj 要处理的对象
 * @param {string} id 比对的对应属性名称
 * @returns {Array<T>} 判断后的数组值
 */
export function toggleArray<T>(
    arr: Array<T>,
    obj: T,
    id: string,
): Array<T> {
    const varr: Array<T> = [];
    let is = true;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index] as ObjUnkn;
        const vs = obj as ObjUnkn;
        if (element[id] === vs[id]) {
            is = false;
        } else {
            varr.push(arr[index]);
        }
    }
    if (is) {
        varr.push(obj);
    }
    return varr;
}
