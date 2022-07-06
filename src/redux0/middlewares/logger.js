function logger(store) {
    return (next) => {
        return (action) => {
            console.log('logger: before action store', store.getState())
            console.log('logger: action', action)
            let newState = next(action)
            console.log('logger: after action store', store.getState())
            return newState
        }
    }
}

export default logger