import useSelector from "./useSelector"

function useTodos(store) {
    return useSelector(store, state => state.todos)
}

  export default useTodos