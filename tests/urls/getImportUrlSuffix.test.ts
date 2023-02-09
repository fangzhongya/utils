import { getImportUrlSuffix } from '../../packages/urls/getImportUrlSuffix';
import { test, expect } from 'vitest';

test('getImportUrlSuffix', () => {
    console.log(
        getImportUrlSuffix(
            'D:\\fangzhongya\\create\\packages\\out\\css.ts',
            'D:\\fangzhongya\\create\\packages\\out\\css.test.ts',
        ),
    );
});
