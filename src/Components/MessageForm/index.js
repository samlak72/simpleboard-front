import React, {useState,useEffect} from 'react';
import {Form, Input} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {saveMessage} from "../../api/ApiUtil";

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
            saveMessage(values.message)
                .then(result=>{
                    alert(result.message)
                });
            form.resetFields();
        }catch(errorInfo){
            console.log("Faild: " , errorInfo);
        }
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