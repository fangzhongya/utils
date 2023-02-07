/**
 * 处理数组遍历问题
 * @param <Array> arr 遍历数组
 * @param callback 处理方法
 * @returns
 */
export function asyncMergeArray<T>(
    arr: Array<T>,
    callback: (
        resolve: () => void,
        reject: (reason?: any) => void,
        value: T,
        index: number,
        array: T[],
    ) => void,
) {
    return new Promise((resolve, reject) => {
        let index = 0;
        const k = arr.length;
        arr.forEach((...a) => {
            callback(
                (...arr) => {
                    index++;
                    if (k == index) {
                        resolve(arr);
                    }
                },
                reject,
                ...a,
            );
        });
    });
}
