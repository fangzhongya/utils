import { matchsStart } from '../../packages/judge/matchsStart';
import { test, expect } from 'vitest';

test('matchsStart', () => {
    expect(matchsStart('is312', ['is'])).toBe(true);
});
