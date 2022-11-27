export function getSortedItemsByCreatedAt(array) {
    return [...array].sort((a, b) => a.created_at - b.created_at);
}
