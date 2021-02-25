import React from 'react';
import './App.css';
import {Layout} from "antd";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Hello from "./Components/Hello";
import Message from "./Components/Message";
import MessageForm from "./Components/MessageForm";
import {HelloProvider} from "./context/hello-context";
import {MessageProvider} from "./context/message-context";

const { Content } = Layout;

function App() {

  return (
      <Layout className="layout">
          <Header></Header>
          <Content className="content">
              <HelloProvider>
                  <Hello></Hello>
              </HelloProvider>

              <MessageProvider>
                  <MessageForm></MessageForm>
                  <Message></Message>
              </MessageProvider>
          </Content>
          <Footer></Footer>
      </Layout>
  );
}

export default App;
