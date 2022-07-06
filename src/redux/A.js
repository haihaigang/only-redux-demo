import React, { useEffect, useRef, useState } from "react";
import store from "./store"

const A = () => {
    let ref = useRef(false)
    let { a } = store.getState()
    const [count, setCount] = useState(a.count)
    useEffect(() => {
        let unsubscribe = store.subscribe(() => {
            let { a } = store.getState()
            if (a.count !== count) {
                console.log('a', a.count, count)
                setCount(a.count)
            }
        })

        return unsubscribe
    }, [count])

    useEffect(() => {
        if (ref.current === false) {
            ref.current = true
            fetch('https://api.shouwuapp.com/v1/goods/58470573').then(res => {
                if (res.status === 200) {
                    return res.json()
                }
            }).then(data => {
                console.log(data.data.goods_name)
            })
        }
            
        return () => {
            console.log('a is dropping')
        }
    }, [])

    const ck = () => {
        store.dispatch({
            type: 'a/add'
        })
    }
    const ck2 = () => {
        store.dispatch((dispatch, getState) => {
            return fetch('https://api.shouwuapp.com/v1/goods/58470573').then(res => {
                if (res.status === 200) {
                    return res.json()
                }
            }).then(data => {
                dispatch({type: 'a/add'})
            })
        })
    }
    console.log('render a')
    return (
        <>
            <button onClick={ck2}>{`${count}+1=${count + 1}`}</button>
        </>
    )
}

export default A