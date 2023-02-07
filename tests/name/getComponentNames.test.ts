import { test, expect } from 'vitest';
import { getComponentNames } from '../../packages/name/getComponentNames';

test('../../packages/name/getComponentNames', () => {
    console.log(getComponentNames('table-url'));
    console.log(getComponentNames('Tab'));
    console.log(getComponentNames('table'));
    console.log(getComponentNames('TabUl'));
    console.log(getComponentNames('tabUl'));
    // expect(getComponentNames('tabUl')).toBe( );
});
