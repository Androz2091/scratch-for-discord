export function getParentName(block) {
    const parent = block.getParent()
    return (parent == null ? null : parent.type)
}
export function getEventName(block) {
    let parent = block.getParent()
    let previous;
    while (parent != null) {
        previous = parent
        parent = parent.getParent()
    }
    parent = previous
    return (parent == null ? null : parent.type)
}