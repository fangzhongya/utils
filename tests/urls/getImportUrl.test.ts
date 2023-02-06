import { getImportUrl } from '../../packages/urls/getImportUrl';
import { test, expect } from 'vitest';

test('getImportUrl', () => {
    console.log(
        getImportUrl(
            'D:\\fangzhongya\\utils\\packages\\basic\\array\\index.ts',
            'D:\\fangzhongya\\utils\\packages\\basic\\string\\index.ts',
        ),
    );
    console.log(
        getImportUrl(
            'D:\\fangzhongya\\utils\\packages\\basic\\array\\dafdsa\\index.ts',
            'D:\\fangzhongya\\utils\\packages\\basic\\array\\index.ts',
        ),
    );
    console.log(
        getImportUrl(
            'D:\\fangzhongya\\create\\packages\\utils\\index.ts',
            'D:\\fangzhongya\\create\\tests\\utils\\index.ts',
        ),
    );
});
