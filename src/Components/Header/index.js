import {Layout, Menu} from "antd";
import {Link} from "react-router-dom";

function Header(){

    return(
        <>
            <Layout.Header className="header">
                <div className={"top-nav g-width"}>
                    <div className="top-logo" ><h1>Osillok</h1></div>
                    <Menu className={"top-nav-menu"} theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1"><Link to={"/"}>Home</Link></Menu.Item>
                        <Menu.Item key="2"><Link to={"/messages"}>Osillok</Link></Menu.Item>
                        <Menu.Item key="3" style={{"float":"right"}}><Link to={"/signin"}>Sign in</Link></Menu.Item>
                    </Menu>
                </div>
            </Layout.Header>
        </>

    )
}

export default Header;
