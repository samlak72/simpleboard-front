import React, {useState} from 'react';
import {Button} from "antd";
import {hello} from "../../api/ApiUtil";

function Hello(){

    const[state, setState] = useState({name:"",hello:''});

    function handleClick(){
        hello().then(response=>{
            setState(response);
        })
    }

    return (
        <p>
            <Button onClick={handleClick}>Hello Button!</Button>
            {state.name} {state.hello} {state.date} {state.time}
        </p>
    )
}

export default Hello;