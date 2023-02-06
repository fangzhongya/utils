import { matchsEnd } from './matchsEnd';
import { matchsStart } from './matchsStart';
import { matchsWhole } from './matchsWhole';
export function matchs(
    key: string,
    matchs?: Array<string | RegExp>,
    type?: string,
): boolean {
    switch (type) {
        case 'end':
            return matchsEnd(key, matchs);
        case 'start':
            return matchsStart(key, matchs);
        default:
            return matchsWhole(key, matchs);
    }
}
