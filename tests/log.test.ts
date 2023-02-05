import { styleLog } from '../packages/log/styleLog';
import { test, expect } from 'vitest';

test('log', () => {
    console.log(
        styleLog(' 你好 ', {
            lineThrough: true,
            bag: 2,
        }) +
            styleLog(' 方忠亚 ', {
                italic: true,
            }),
    );
});
