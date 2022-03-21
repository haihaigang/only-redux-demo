let newestId = 0

function todos(state, action) {
    console.log('reducer action',action)
    switch(action.type) {
        case 'add': {
            let id = state.todos.length
            return {
                ...state,
                todos: [...state.todos, {id: ++newestId, ...action.data}]
            }
        }
        case 'remove': {
            let index = state.todos.findIndex(todo => todo.id === parseInt(action.data))
            state.todos.splice(index, 1)
            return {
                ...state,
                todos: [...state.todos]
            }
        }
        case 'countadd': {
            return {
                ...state,
                count: state.count + 1
            }
        }
        default: {
            return state
        }
    }
}

export default todos