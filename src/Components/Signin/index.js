import {Button, Checkbox, Col, Form, Input, Row} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";

const Signin = () => {
    function onFinish() {

    }
    return(
        <Form name={"normal_login"}
              className={"login-form"}
              initialValues={{remember:true}}
              onFinish={onFinish}
              xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}
        >
            <Form.Item
                name={"name"}
                rules={
                    [{
                        required: true,
                        message: 'Please Input your Username'
                    }]
                }>
                <Input prefix={<UserOutlined className={"site-form-item-icon"} placeholder={"Username"}/>}/>
            </Form.Item>
            <Form.Item
                name={"password"}
                rules={
                    [{
                        required: true,
                        messaeg: "please input your Password"
                    }]
                }>
                <Input
                    prefix={<LockOutlined className={"site-form-item-icon"}/>}
                    type={"password"}
                    placeholder={"Password"}
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name={"remember"} valuePropName={"checked"} noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <a className={"login-form-forgot"} href={""}>
                    Forget password
                </a>
            </Form.Item>
            <Form.Item>
                <Button type={"primary"} htmlType={"submit"} className={"login-form-button"}>
                    Log in
                </Button>
                Or <a href={""}>register now!</a>
            </Form.Item>
        </Form>

    )
}

export default Signin;
