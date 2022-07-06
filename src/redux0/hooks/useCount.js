import useSelector from "./useSelector"

function useCount(store) {
    return useSelector(store, state => state.count)
}

  export default useCount