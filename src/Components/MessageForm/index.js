import React, {useState} from 'react';
import {Input} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {saveMessage} from "../../api/ApiUtil";

function MessageForm(){

    const[message, setMessage] = useState("");

    function handleChange(event){
        setMessage(event.target.value);
    }

    function handlePressEnter(event){
        const message = event.target.value;
        console.log(message);
        setMessage("");
        saveMessage(message)
            .then(result=>{
                console.log(result);
                alert(result.message)
            });
    }

    return(
        <p>
            <Input
                size="large"
                placeholder="Input message!!"
                onChange={handleChange}
                onPressEnter={handlePressEnter}
                value={message}
                prefix={<UserOutlined />}
            />
        </p>
    )
}

export default MessageForm;