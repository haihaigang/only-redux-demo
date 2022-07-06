import React, { useEffect, useState } from "react";
import store from "./store"

const B = () => {
    let { b } = store.getState()
    const [count, setCount] = useState(b.count)
    useEffect(() => {
        let unsubscribe = store.subscribe(() => {
            let { b } = store.getState()
            if (b.count !== count) {
                console.log('b', b.count, count)
                setCount(b.count)
            }
        })

        return unsubscribe
    }, [count])

    useEffect(() => {
        return () => console.log('b droping')
    }, [])

    const ck = () => {
        store.dispatch({
            type: 'b/add',
            payload: 2
        })
    }
    console.log('render b')
    return (
        <>
        <button onClick={ck}>{`${count}*2=${count*2}`}</button>
        </>
        )
}

export default B