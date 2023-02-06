import { styleLog } from '../../packages/log/styleLog';
import { test, expect } from 'vitest';

test('styleLog', () => {
    console.log(
        styleLog(' 你好 ', {
            lineThrough: true,
            bag: 2,
        }) +
            styleLog(' 方忠亚 ', {
                text: 7,
                italic: true,
            }),
    );
});
