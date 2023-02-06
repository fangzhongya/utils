import { matchsWhole } from '../../packages/judge/matchsWhole';
import { test, expect } from 'vitest';

test('matchsWhole', () => {
    expect(matchsWhole('is', ['is'])).toBe(true);
});
