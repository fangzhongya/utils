export function matchsStart(
    key: string,
    matchs?: Array<string | RegExp>,
): boolean {
    if (matchs && matchs.length > 0) {
        for (const value of matchs) {
            if (typeof value == 'string') {
                if (key.startsWith(value)) {
                    return true;
                }
            } else {
                if (value.test(key)) {
                    return true;
                }
            }
        }
        return false;
    } else {
        return true;
    }
}