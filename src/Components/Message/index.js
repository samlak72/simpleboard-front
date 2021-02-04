import React, {useState} from 'react';
import {Button, Divider, Pagination} from "antd";
import {findAllSimpleboards} from "../../api/ApiUtil";

function Message(){

    const[messages, setMessages] = useState(
        {
            content:[],
            totalElements:0,
        }
        );
    function handleMessageButton(page) {
        findAllSimpleboards(page?page:0).then(response=>{
            setMessages(response);
        })
    }

    function handlePage(page){
        const setMessage = {pageable:{pageNumber:page-1}}
        const pageMessage = {...messages,...setMessage}
        setMessages(pageMessage)
        handleMessageButton(page-1)
    }

    return (
        <p>
            <Button onClick={()=>handleMessageButton(0)}>Find All!</Button>
            {messages.content.map((d)=>{
                return <li key={d.id}>{d.id}. {d.message}</li>
            })}
            <Divider/>
            <Pagination
                defaultCurrent={1}
                defaultPageSize={20}
                total={messages.totalElements}
                onChange={handlePage}
            />
        </p>
    )
}

export default Message;