function AReducer(state = {count: 5}, { type } = {}) {

    if (type === 'a/add') {
        return { count: state.count + 1}
    } else if ( type === 'a/fetch') {
        
    }
    return state
}
export default AReducer