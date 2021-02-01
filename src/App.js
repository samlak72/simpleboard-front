import React from 'react';
import './App.css';
import {Layout} from "antd";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Hello from "./Components/Hello";
import Message from "./Components/Message";
import MessageForm from "./Components/MessageForm";

const { Content } = Layout;

function App() {

  return (
      <Layout className="layout">
          <Header></Header>
          <Content className="content">
              <Hello></Hello>
              <MessageForm></MessageForm>
              <Message></Message>
          </Content>
          <Footer></Footer>
      </Layout>
  );
}

export default App;
