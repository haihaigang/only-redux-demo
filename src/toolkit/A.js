import React, { useEffect, useState } from "react";
import store from "./store"
import { add } from "./reducers/a"

const A = () => {
    let {a} = store.getState()
    const [count, setCount] = useState(a.count)
    useEffect(() => {
        let unsubscribe = store.subscribe(() => {
            let { a } = store.getState()
            if (a.count !== count) {
                console.log('a',a.count, count)
                setCount(a.count)
            }
        })

        return unsubscribe
    }, [count])

    useEffect(() => {
        fetch('https://api.shouwuapp.com/v1/goods/58470573').then(res => {
            if (res.status === 200) {
                return res.json()
            }
        }).then(data => {
            console.log(data.data.goods_name)
        })
    }, [])

    const ck = () => {
        store.dispatch(add())
    }
    const ck2 = () => {
        store.dispatch((dispatch, store) => {
            return fetch('https://api.shouwuapp.com/v1/goods/58470573').then(res => {
                if (res.status === 200) {
                    return res.json()
                }
            }).then(data => {
                console.log(data.data.goods_name)
                dispatch(add())
            })
        })
    }
    console.log('render a')
    return (
        <>
        <button onClick={ck2}>{`${count}+1=${count+1}`}</button>
        </>
    )
}

export default A