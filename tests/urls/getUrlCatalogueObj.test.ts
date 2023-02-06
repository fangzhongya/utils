import { test, expect } from 'vitest';
import { getUrlCatalogueObj } from '../../packages/urls/getUrlCatalogueObj';

test('../../packages/urls/getUrlCatalogueObj', () => {
    expect(
        getUrlCatalogueObj(
            'D:\\fangzhongya\\utils\\packages\\basic\\array\\index.ts',
        ).name,
    ).toBe('index');
});
