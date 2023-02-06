import { getUrlCatalogue } from '../../packages/urls/getUrlCatalogue';
import { test, expect } from 'vitest';

test('getUrlCatalogue', () => {
    console.log(
        getUrlCatalogue(
            'D:\\fangzhongya\\utils\\packages\\basic\\array\\index.ts',
        ),
    );
});
