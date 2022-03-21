
function counter(state = 0, action) {
    switch(action.type) {
        case 'countadd': {
            return state + 1
        }
        default: {
            return state
        }
    }
}

export default counter