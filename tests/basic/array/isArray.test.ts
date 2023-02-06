import { test, expect } from 'vitest';
import { isArray } from '../../../packages/basic/array/isArray';

test('../../../packages/basic/array/isArray', () => {
    expect(isArray([])).toBe(true);
});
