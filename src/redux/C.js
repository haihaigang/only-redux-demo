import React, { useEffect } from "react";


const C = () => {
    useEffect(() => {
        console.log('c eff')

        return () => {
            console.log('c drop')
        }
    },[])
    return <div>ccc</div>
}

export default C