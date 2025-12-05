const items = []

function isEmpty() {
    return items.length === 0
}

function enqueue(element) {
    if (isEmpty()) {
        items.push(element)
        return
    }

    for (let i = 0; i < items.length; i++) {
        if (element.prioridade > items[i].prioridade) {
            items.splice(i, 0, element)
            return
        }
    }

    items.push(element)
}

function dequeue() {
    return items.shift()
}

function size() {
    return items.length
}

function front() {
    return isEmpty() ? null : items[0]
}

function rear() {
    return isEmpty() ? null : items[items.length - 1]
}

export { items, enqueue, dequeue, size, isEmpty, front, rear }
