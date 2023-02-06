/**
 * 颜色
 * 0 黑色	'black'
 * 1 红色	'red'
 * 2 绿色	'green'
 * 3 黄色	'yellow'
 * 4 蓝色	'blue'
 * 5 洋红色	'magenta'
 * 6 青色	'cyan'
 * 7 白色	'white'
 */
interface StyleLogObj {
    /**
     * 背景颜色
     * 10
     * x1b[4${?}m
     */
    bag?: string | number;
    /**
     * 文字颜色
     * x1b[3${?}m
     */
    text?: string | number;
    /**
     * 是否是粗体
     * x1b[1m
     */
    bold?: boolean;
    /**
     * 是否是斜体
     * x1b[3m
     */
    italic?: boolean;
    /**
     * 中线
     * \x1b[9m
     */
    lineThrough?: boolean;
    /**
     * 下线
     * \x1b[4m
     */
    revert?: boolean;
}

/**
 * 日志输出样式
 * 颜色值 背景色 0 是白色 7是黑色 其他一样：
 * 0 黑色	'black'
 * 1 红色	'red'
 * 2 绿色	'green'
 * 3 黄色	'yellow'
 * 4 蓝色	'blue'
 * 5 洋红色	'magenta'
 * 6 青色	'cyan'
 * 7 白色	'white'
 * @param {string} msg 要输出的日志字符串
 * @param {StyleLogObj} obj 日志样式对象
 * @param {string | number} obj.bag 背景颜色
 * @param {string | number} obj.text 文字颜色
 * @param {boolean } obj.bold 是否是粗体
 * @param {boolean} obj.italic 是否是斜体
 * @param {boolean} obj.lineThrough 中线
 * @param {boolean} obj.revert 下线
 * @returns {string} 带样式的日志
 */
export function styleLog(msg = '', obj?: StyleLogObj) {
    const arr = ['\x1b[0m'];
    if (obj?.revert) {
        arr.push('\x1b[4m');
    }
    if (obj?.lineThrough) {
        arr.push('\x1b[9m');
    }
    if (obj?.italic) {
        arr.push('\x1b[3m');
    }
    if (obj?.bold) {
        arr.push('\x1b[1m');
    }
    if (obj?.bag) {
        arr.push(`\x1b[4${obj?.bag}m`);
    } else {
        arr.push('\x1b[40m');
    }
    if (obj?.text) {
        arr.push(`\x1b[3${obj?.text}m`);
    } else {
        arr.push('\x1b[30m');
    }
    arr.push(msg);
    arr.push('\x1b[0m');
    return arr.join('');
}
