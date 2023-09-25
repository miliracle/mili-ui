
const uniqueCountForNamespace = new Map<string, number>();
/** Generate a unique ID within a given namespace, using a simple counter-based implementation to avoid collisions. */
export function uniqueId(namespace: string) {
    const curCount = uniqueCountForNamespace.get(namespace) ?? 0;
    uniqueCountForNamespace.set(namespace, curCount + 1);
    return `${namespace}-${curCount}`;
}
