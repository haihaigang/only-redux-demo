import React from "react"
import DemoBlock from "../DemoBlock"
import A from "./A"
import B from "./B"

const Demo = () => {
    return (
        <>
            <DemoBlock><A/></DemoBlock>
            <DemoBlock><B/></DemoBlock>
        </>
    )
}
export default Demo