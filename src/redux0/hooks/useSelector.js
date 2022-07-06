import { useState, useEffect } from "react"

function useSelector(store, selector) {
    const [data, setData] = useState(selector(store.getState()))
    
    useEffect(() => {
        let unsubscribe = store.subscribe(() => {
            let newData = selector(store.getState())
            if (newData !== data) {
                setData(selector(store.getState()))
            }
        })
        
        return unsubscribe
    },[])

    return data
}

  export default useSelector