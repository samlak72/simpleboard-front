import React, {useContext, useState} from 'react';
import {Button} from "antd";
import {hello} from "../../api/ApiUtil";
import HelloContext, {useHelloDispatch, useHelloState} from "../../context/hello-context";

function Hello(){

    const[state, setState] = useState({name:"",hello:''});

    const helloState = useHelloState();
    const helloDispatch = useHelloDispatch();

    function handleClick(){
        hello().then(response=>{
            setState(response);
        })
    }

    function handleHelloClick(){
        helloDispatch({type:'hello'})
    }

    return (
        <>
            <p>
                <Button onClick={handleClick}>Hello Button!</Button>
                {state.name} {state.hello} {state.date} {state.time}
            </p>
            <p>
                <Button onClick={handleHelloClick}>Hello context {helloState.value}</Button>
            </p>
        </>

    )
}

export default Hello;
