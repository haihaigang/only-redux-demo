function BReducer(state = { count: 1 }, { type, payload } = { type: '', payload: 1 }) {
    if (type === "b/add") {
        return {count: state.count * payload}
    }
    return state
}
export default BReducer