import React, { useEffect, useState } from "react";
import store from "./store"
import { add } from "./reducers/b"

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

    const ck = () => {
        store.dispatch(add(2))
    }
    console.log('render b')
    return (
        <>
        <button onClick={ck}>{`${count}*2=${count*2}`}</button>
        </>
        )
}

export default B