
/**
 * 合并两个对象的值
 * @param a 合并到的对象
 * @param b 合并对象
 * @param j 合并级别
 * @param i 是否合并数组
 * @returns 合并的对象
 */
export function mergeObject<T>(a: T, b: T, j: number = 1, i?: boolean): T {
    for (const key in b) {
        const v = a[key];
        const t = b[key];
        if (v) {
            if (v instanceof Array) {
                if (i) {
                    if (t instanceof Array) {
                        v.push(...t)
                    } else {
                        v.push(t)
                    }
                } else {
                    a[key] = t;
                }
            } else if (typeof v == 'object') {
                const cv = Object.prototype.toString.call(v);
                const ct = Object.prototype.toString.call(t)
                if (cv == ct) {
                    const n = j - 1;
                    if (n > 0) {
                        a[key] = mergeObject(v, t, n, i);
                    } else {
                        a[key] = t;
                    }
                } else {
                    a[key] = t;
                }
            }
            else {
                a[key] = t;
            }
        } else {
            a[key] = t;
        }
    }
    return a
}