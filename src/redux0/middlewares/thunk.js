function thunk(store) {
    return function(next) {
        return function(action) {
            if (typeof action === 'function') {
                return action(store.dispatch, store.getState)
            }
            return next(action)
        }
    }
}
export default thunk