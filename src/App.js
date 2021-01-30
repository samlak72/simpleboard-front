import React, {useState} from 'react';
import './App.css';
import {findAll, hello} from "./api/ApiUtil";
import {Button, Input, Layout } from "antd";
import { UserOutlined } from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;


function App() {

    const[state, setState] = useState({name:"",hello:''});
    const[message, setMessage] = useState("");
    const[messages, setMessages] = useState([]);

    function handleChange(event){
        console.log(event.target.value);
        setMessage(event.target.value);
    }

    function handleMessageButton() {
        findAll().then(response=>{
            setMessages(response);
        })
    }

  return (
      <Layout className="layout">
          <Header className="header">Header</Header>
          <Content className="content">
              <div>
                  <p>
                      <Button onClick={()=>{
                          hello().then(response=>{
                              setState(response);
                          })
                      }}>Hello Button!</Button>
                      {state.name} {state.hello} {state.date} {state.time}
                  </p>

                  <p>
                      <Button onClick={handleMessageButton}>Find All!</Button>
                      {messages.map((d)=>{
                          console.log(d.message)
                          return <li key={d.id}>{d.id}. {d.message}</li>
                      })}
                  </p>

                  <p>
                      <Input size="large" placeholder="large size" onChange={handleChange} prefix={<UserOutlined />} />
                  </p>
          </div></Content>
          <Footer className="footer">Footer</Footer>
      </Layout>

  );
}

export default App;
