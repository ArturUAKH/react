import React from "react";
import { Card } from "../components/card/card";
import "./app.css"
import {list} from "../data.js/data"


function App (){
    return (
        <>
            {
                Array.isArray(list)?
                list.map((e, i)=> {
                    return <Card info={e}></Card>
                })
                :null
            }
        </>
    )
}

export default App;