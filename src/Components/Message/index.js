import React, {useState,useContext} from 'react';
import {Button, Divider, Pagination} from "antd";
import {findAllSimpleboards} from "../../api/ApiUtil";
import {useMessageDispatch, useMessageState} from "../../context/message-context";

function Message(){

    const[messages, setMessages] = useState(
        {
            content:[],
            totalElements:0,
        });

    // Message context를 가져온다.
    const messageState = useMessageState();
    console.log(messageState)
    const messageDispatch = useMessageDispatch();

    async function handleMessageButton(page) {
        const response = await findAllSimpleboards(page?page:0)
        messageDispatch({type:'messages',payload:response})
    }

    async function handlePage(page){
        const response = await findAllSimpleboards(page-1)
        messageDispatch({type:'messages',payload:response})
    }

    async function handleMessageContext(page){
        const response = await findAllSimpleboards(page?page:0)
        messageDispatch({type:'messages',payload:response})
    }

    function handleMessage(ele){
        /*console.log('handle message',ele.target.innerText);
        const text = '<input value=\''+ele.target.innerText+'\'/>'
        console.log('handle message',text);
        ele.target.innerHTML = text
        ele.target.value=ele.target.innerText*/
    }

    return (
        <p>
            <Button onClick={()=>handleMessageButton(0)}>Find All!</Button>
            <ul onClick={handleMessage}>
            {messageState.content.map((d)=>{
                return <li key={d.id} contenteditable="true" onClick={handleMessage}>{d.id}. {d.message}</li>
            })}
            </ul>
            <Button onClick={handleMessageContext}>Fill all context!</Button>
            <Divider/>
            <Pagination
                defaultCurrent={1}
                defaultPageSize={20}
                total={messageState.totalElements}
                onChange={handlePage}
            />
        </p>
    )
}

export default Message;
