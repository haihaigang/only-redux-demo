let newestId = 0

function todos(state = [], action) {
    switch(action.type) {
        case 'add': {
            return [
                ...state,
                {id: ++newestId, ...action.payload}
            ]
        }
        case 'remove': {
            let index = state.findIndex(todo => todo.id === parseInt(action.payload))
            state.splice(index, 1)
            return [...state]
        }
        default: {
            return state
        }
    }
}

export default todos