const stack = []

// adicioar um elemento ao topo da pilha
function push(value){
    stack.push(value)
}

// remover o elemento do topo da pilha
function pop(){
    return stack.pop()
}

// retornar o elemento do topo da pilha
function peek(){
    return stack[size()-1]
}

// verificar se a pilha está vazia
function isEmpty(){
    return size() === 0
}

// retornar o tamanho da pilha
function size(){
    return stack.length
}

export {push, pop, peek, isEmpty, size, stack}