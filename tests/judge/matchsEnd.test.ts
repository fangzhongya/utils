import { matchsEnd } from '../../packages/judge/matchsEnd';
import { test, expect } from 'vitest';

test('matchsEnd', () => {
    expect(matchsEnd('1is', ['is'])).toBe(true);
});
