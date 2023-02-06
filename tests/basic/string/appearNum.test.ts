import { appearNum } from '../../../packages/basic/string/appearNum';
import { test, expect } from 'vitest';

test('appearNum', () => {
    console.log(
        appearNum(
            'D:\\fangzhongya\\utils\\packages\\basic\\array\\index.ts',
            /\\/g,
        ),
    );
});
