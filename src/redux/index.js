import React from "react";
import DemoBlock from "../DemoBlock"
import A from "./A"
import B from "./B"
import C from "./C";

const Demo = () => {
    return (
        <>
            <DemoBlock><A/></DemoBlock>
            <DemoBlock><B/></DemoBlock>
            <DemoBlock><C/></DemoBlock>
        </>
    )
}

export default Demo