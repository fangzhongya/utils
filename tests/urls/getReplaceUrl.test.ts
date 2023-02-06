import { getReplaceUrl } from '../../packages/urls/getReplaceUrl';
import { test, expect } from 'vitest';

test('getReplaceUrl', () => {
    console.log(
        getReplaceUrl(
            'D:\\fangzhongya\\utils\\packages\\basic\\array\\index.ts',
            'D:\\fangzhongya\\utils\\tests',
        ),
    );
});
