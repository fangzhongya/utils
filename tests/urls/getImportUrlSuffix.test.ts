import { getImportUrlSuffix } from '../../packages/urls/getImportUrlSuffix';
import { test, expect } from 'vitest';

test('getImportUrlSuffix', () => {
    console.log(
        getImportUrlSuffix(
            'D:\\fangzhongya\\utils\\packages\\basic\\array\\index.ts',
            'D:\\fangzhongya\\utils\\packages\\basic\\array\\dafdsa\\index.ts',
        ),
    );
});
