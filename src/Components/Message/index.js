import React, {useEffect, useState} from 'react';
import {Divider, List, Pagination, Space} from "antd";
import {deleteSimpleboard, findAllSimpleboards, updateSimpleboard} from "../../api/ApiUtil";
import {useMessageDispatch, useMessageState} from "../../context/message-context";
import {CloseCircleTwoTone} from "@ant-design/icons";

function Message(){

    const [page,setPage] = useState(0);
    const [isEdit, setIsEdit] = useState(false);

    const messageState = useMessageState();
    const messageDispatch = useMessageDispatch();

    useEffect(()=>{
        const response = findAllSimpleboards(0).then( response =>
            messageDispatch({type:'messages',payload:response})
        )
    },[])

    function handleMouseOver(e){
        //e.target.innerHtml='x'
    }

    const messageList = <List className="g-width"
        header={<div><h1>오실록(오늘의 실행 목록)</h1></div>}
        footer={<div>나는 오늘도 실행한다.</div>}
        bordered
        dataSource={messageState.content}
        renderItem={item=>(
            <List.Item
                key={item.id}
            >
                <Space size={"small"}>
                    <CloseCircleTwoTone  data-key={item.id} onClick={handleDeleteMessage} style={{cursor:"pointer"}}/>
                    <span
                        data-key={item.id}
                        contentEditable suppressContentEditableWarning={true}
                        onMouseOver={handleMouseOver}
                        onInput={handleMessage}
                        onBlur={handleMessageInput}
                        style={{width:'100%'}}
                    >{item.message}</span>
                </Space>
            </List.Item>
        )}

    />

    async function handleMessageButton(page) {
        const response = await findAllSimpleboards(page?page:0)
        messageDispatch({type:'messages',payload:response})
    }

    async function handlePage(page){
        const response = await findAllSimpleboards(page-1)
        messageDispatch({type:'messages',payload:response})
        setPage(page);
    }

    async function handleMessageContext(page){
        const response = await findAllSimpleboards(page?page:0)
        messageDispatch({type:'messages',payload:response})
    }

    function handleMessage(ele){
        setIsEdit(true);
    }

    function handleMessageChange(e){
    }

    async function handleMessageInput(e){
        console.log('Text inside div', e.currentTarget.textContent,e.currentTarget.dataset.key,isEdit)
        if(isEdit){
            await updateSimpleboard({message:e.currentTarget.textContent,id:e.currentTarget.dataset.key});
            const response = await findAllSimpleboards(page>0?page-1:0)
            messageDispatch({type:'messages',payload:response})
            setIsEdit(false);
        }
        setIsEdit(false);
    }

    async function handleDeleteMessage(e){
        console.log(e.currentTarget.dataset)
        await deleteSimpleboard({message:e.currentTarget.textContent,id:e.currentTarget.dataset.key})
        const response = await findAllSimpleboards(page>0?page-1:0)
        messageDispatch({type:'messages',payload:response})
    }


    return (
        <p>
            {/*<Button onClick={()=>handleMessageButton(0)}>Find All!</Button>*/}

            {messageList}

            {/*<Button onClick={handleMessageContext} >Fill all context!</Button>*/}
            <Divider/>
            <Pagination
                className="g-width"
                defaultCurrent={1}
                defaultPageSize={20}
                total={messageState.totalElements}
                onChange={handlePage}
            />
        </p>
    )
}

export default Message;
