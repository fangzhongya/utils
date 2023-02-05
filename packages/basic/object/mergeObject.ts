// /**
//  * 合并两个对象的值
//  * @param a 合并到的对象
//  * @param b 合并对象
//  * @param j 合并级别
//  * @param i 是否合并数组
//  * @returns 合并的对象
//  */
// export function mergeObject2<T>(
//     a: T,
//     b: T,
//     j: number = 1,
//     i?: boolean,
// ): T {
//     for (const key in b) {
//         const v = a[key];
//         const t = b[key];
//         if (v) {
//             if (v instanceof Array) {
//                 if (i) {
//                     if (t instanceof Array) {
//                         v.push(...t);
//                     } else {
//                         v.push(t);
//                     }
//                 } else {
//                     a[key] = t;
//                 }
//             } else if (typeof v == 'object') {
//                 const cv =
//                     Object.prototype.toString.call(v);
//                 const ct =
//                     Object.prototype.toString.call(t);
//                 if (cv == ct) {
//                     const n = j - 1;
//                     if (n > 0) {
//                         a[key] = mergeObject2(v, t, n, i);
//                     } else {
//                         a[key] = t;
//                     }
//                 } else {
//                     a[key] = t;
//                 }
//             } else {
//                 a[key] = t;
//             }
//         } else {
//             a[key] = t;
//         }
//     }
//     return a;
// }

/**
 * 合并两个对象的值
 * @param a 合并到的对象
 * @param b 合并对象
 * @param j 合并级别
 * @param i 是否合并数组
 * @returns 合并的对象
 */
export function mergeObject<T>(
    a: T,
    b: T,
    j: number = 0,
    i?: boolean,
): T {
    if (a instanceof Array) {
        if (j > 0 && i) {
            if (b instanceof Array) {
                for (const v of b) {
                    if (!a.includes(v)) {
                        a.push(v);
                    }
                }
            } else {
                if (!a.includes(b)) {
                    a.push(b);
                }
            }
        } else {
            a = b;
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
            const n = j - 1;
            if (n > 0) {
                for (const key in b) {
                    const v = a[key];
                    const t = b[key];
                    a[key] = mergeObject(v, t, n, i);
                }
            } else {
                for (const key in b) {
                    a[key] = b[key];
                }
            }
        } else {
            a = b;
        }
    } else {
        a = b;
    }
    return a;
}
