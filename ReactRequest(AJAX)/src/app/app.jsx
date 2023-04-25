import React from "react";
import List from "../components/List/list";
import AJAX from "../components/Req/req";

const App = function(){
    function info(data){
        console.log(data);
    }
    AJAX('https://jsonplaceholder.typicode.com/users', info);

    return (
        <>
            <List></List>
        </>
    )
};
export default App;
