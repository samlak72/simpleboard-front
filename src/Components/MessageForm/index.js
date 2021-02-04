import React, {useState,useEffect} from 'react';
import {Form, Input, message as antMessage} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {saveSimpleboard} from "../../api/ApiUtil";

function MessageForm(){

    const [form] = Form.useForm();
    const[message, setMessage] = useState("");

    function handleChange(event){
        setMessage(event.target.value);
    }

    async function handlePressEnter(){
        try{
            const values = await form.validateFields();
            setMessage("");
            saveSimpleboard(values.message)
                .then(result=>{
                    info(result.message);
                });
            form.resetFields();
        }catch(errorInfo){
            error(errorInfo);
            console.log("Faild: " , errorInfo);
        }
    }

    const info = (msg) => {
        antMessage.info(msg);
    };

    const error = (err) => {
        antMessage.error(err);
    }

    return(
        <p>
            <Form form={form} name={"messageForm"}>
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
                        value={message}
                        prefix={<UserOutlined />}
                    />
                </Form.Item>
            </Form>
        </p>
    )
}

export default MessageForm;