class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(){
        this.frontNode = null
        this.rearNode = null
        this._size = 0
    }

    enqueue(element){
        const node = new Node(element)

        let current = this.frontNode
        let previous = null

        while (current) {
            if (current.value.nome === element.nome) {

                // Caso 1: tempo novo é pior
                if (element.tempo > current.value.tempo) {
                    return
                }

                // Caso 2: tempo novo é melhor ou igual
                if (previous) {
                    previous.next = current.next
                } else {
                    this.frontNode = current.next
                }

                if (current === this.rearNode) {
                    this.rearNode = previous
                }

                this._size--
                break
            }

            previous = current
            current = current.next
        }


        // fila vazia
        if (!this.frontNode) {
            this.frontNode = node
            this.rearNode = node
            this._size++
            return
        }

        // inserir no início
        if (element.tempo < this.frontNode.value.tempo) {
            node.next = this.frontNode
            this.frontNode = node
            this._size++
            return
        }

        // inserir no meio ou final
        current = this.frontNode
        while (current.next && current.next.value.tempo < element.tempo) {
            current = current.next
        }

        node.next = current.next
        current.next = node

        if (!node.next) {
            this.rearNode = node
        }

        this._size++
    }

    dequeue(){
        if (this.isEmpty()) return null

        const removed = this.frontNode.value
        this.frontNode = this.frontNode.next

        if (!this.frontNode) this.rearNode = null

        this._size--
        return removed
    }

    size(){ return this._size }
    isEmpty(){ return this._size === 0 }
    front(){ return this.frontNode ? this.frontNode.value : null }
    rear(){ return this.rearNode ? this.rearNode.value : null }
}
export { Queue }
