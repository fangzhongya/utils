import { test, expect } from 'vitest';
import { getUrlCatalogueLast } from '../../packages/urls/getUrlCatalogueLast';

test('../../packages/urls/getUrlCatalogueLast', () => {
    expect(
        getUrlCatalogueLast(
            'D:\\fangzhongya\\utils\\tests\\urls\\getUrlCatalogueLast.test.ts',
        ),
    ).toBe('urls');

    expect(
        getUrlCatalogueLast(
            'D:\\fangzhongya\\utils\\tests\\urls\\',
        ),
    ).toBe('urls');
});
