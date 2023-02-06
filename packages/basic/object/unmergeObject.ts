/**
 * 合并两个对象不改原对象的值
 * @param {T} a 合并对象
 * @param {T} b 合并对象
 * @param {number} j 合并级别
 * @param {boolean} i 是否合并数组
 * @returns {T} 合并的对象
 */
export function unmergeObject<T>(
    a: T,
    b: T,
    j: number = 0,
    i?: boolean,
): T {
    let c;
    if (a instanceof Array) {
        if (j > 0 && i) {
            c = Object.assign([], a);
            if (b instanceof Array) {
                for (const v of b) {
                    if (!a.includes(v)) {
                        c.push(v);
                    }
                }
            } else {
                if (!a.includes(b)) {
                    c.push(b);
                }
            }
        } else {
            c = b;
        }
    } else if (typeof a == 'object') {
        const cv = Object.prototype.toString.call(a);
        const ct = Object.prototype.toString.call(b);
        if (
            a &&
            typeof b == 'object' &&
            cv == ct &&
            j > 0
        ) {
            c = { ...a };
            const n = j - 1;
            if (n > 0) {
                for (const key in b) {
                    const v = a[key];
                    const t = b[key];
                    c[key] = unmergeObject(v, t, n, i);
                }
            } else {
                for (const key in b) {
                    c[key] = b[key];
                }
            }
        } else {
            c = b;
        }
    } else {
        c = b;
    }
    return c;
}
