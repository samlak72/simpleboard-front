import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import {Layout} from "antd";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Message from "./Components/Message";
import MessageForm from "./Components/MessageForm";
import {MessageProvider} from "./context/message-context";
import Signin from "./Components/Signin";
import Home from "./Components/Home";

const { Content } = Layout;

function App() {

  return (
      <Router>
          <Layout className="layout">
              <Header></Header>
              <Content className="content">
                  <Switch>
                      <Route path={"/messages"}>
                          <MessageProvider>
                              <MessageForm></MessageForm>
                              <Message></Message>
                          </MessageProvider>
                      </Route>
                      <Route path={"/signin"}>
                          <Signin />
                      </Route>
                      <Route path={"/"}>
                          <Home />
                      </Route>
                  </Switch>
                  <div className={"push"}/>
              </Content>
          </Layout>
          <Footer></Footer>
      </Router>

  );
}

export default App;
