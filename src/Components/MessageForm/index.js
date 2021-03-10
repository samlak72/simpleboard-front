import React, {useState, useEffect, createRef} from 'react';
import {Form, Input, message as antMessage} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {findAllSimpleboards, saveSimpleboard} from "../../api/ApiUtil";
import {useMessageDispatch} from "../../context/message-context";

function MessageForm(){

    const [form] = Form.useForm();
    const[message, setMessage] = useState({});
    const [inputFocus,setInputFocus] = useState(() => createRef())

    const messageDispatch = useMessageDispatch();

    function handleChange(event){
        setMessage({message:event.target.value});
    }

    async function handlePressEnter(){
        try{
            const values = await form.validateFields();
            setMessage("");
            saveSimpleboard({message:values.message})
                .then(result=>{
                    info(result.message);
                });
            form.resetFields();
            const response = await findAllSimpleboards(0)
            messageDispatch({type:'messages',payload:response})
            inputFocus.current.focus();
        }catch(errorInfo){
            error(errorInfo);
        }
    }

    const info = (msg) => {
        antMessage.info(msg);
    };

    const error = (err) => {
        antMessage.error("Mesasge Input Error!");
    }

    return(
        <p>
            <Form className="g-width" form={form} name={"messageForm"}>
                <Form.Item
                    name={"message"}
                    rules={[
                        {
                            required: true,
                            message: "Please input message!",
                        }
                    ]}
                >
                    <Input
                        size="large"
                        placeholder="Input message!!"
                        onChange={handleChange}
                        onPressEnter={handlePressEnter}
                        value={message.message}
                        prefix={<UserOutlined />}
                        ref={inputFocus}
                    />
                </Form.Item>
            </Form>
        </p>
    )
}

export default MessageForm;
