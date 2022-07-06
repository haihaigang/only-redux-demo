function addTodo(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({name})
        })
    })
}

export default addTodo