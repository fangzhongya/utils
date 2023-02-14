const tops: string[] = [
    '\n',
    '\r',
    ' ',
    '+',
    '-',
    '*',
    '/',
    ':',
    '(',
];
const ends: string[] = [
    '\n',
    '\r',
    ' ',
    '+',
    '-',
    '*',
    '/',
    ';',
    ')',
    '}',
];

/**
 * 提取单位值
 * @param text
 * @param str
 * @param callback
 * @returns
 */
export function fetchUnitValue(
    text: string,
    str: string,
    callback?: (
        n: number,
        dw: string,
        yss: string,
        i: number,
    ) => string,
): string {
    const reg = new RegExp(`([-]?[0-9\\.]+)(${str})`, 'g');
    return text.replace(reg, function (a, b, c, d) {
        let is = false;
        const q = text.charAt(d - 1);
        const h = text.charAt(d + a.length);
        const s = Number(b);
        if (
            !isNaN(s) &&
            tops.includes(q) &&
            ends.includes(h)
        ) {
            is = true;
        }
        let thv = a;
        if (callback && is) {
            thv = callback(s, c, a, d);
        }
        return thv;
    });
}
