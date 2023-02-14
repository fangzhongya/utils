/**
 * D:/fangzhongya/utils/packages/css/fetchUnitValue.ts
 * Fri Feb 10 2023 09:03:43 GMT+0800 (中国标准时间)
 */
import { test, expect } from 'vitest';
import { fetchUnitValue } from '../../packages/css/fetchUnitValue';

test('../../packages/css/fetchUnitValue', () => {
    fetchUnitValue('10px 20px "10px"', 'px');
    // expect(fetchUnitValue('db')).toBe();
});
