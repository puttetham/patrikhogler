import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from "./components/main";
import { Link } from 'react-router-dom';
import { IconButton, MenuItem, Menu } from 'react-mdl';

class App extends Component {
  render() {
    return (
    <div className="demo-big-content">
        <Layout fixedHeader>
            <Header className="header-color" title={<Link style={{textDecoration: 'none', color: '#fff', display: 'block'}} to="/">Patrik Hogler</Link>}>
                <Navigation>
                <div className="menudiv" style={{position: 'relative'}}>
                <IconButton name="more_vert" id="demo-menu-lower-right" />
                    <Menu target="demo-menu-lower-right" align="right">
                        <MenuItem><Link style={{textDecoration: 'none', color: '#191919', display: 'block'}} to="/resume">Resume</Link></MenuItem>
                        <MenuItem><Link style={{textDecoration: 'none', color: '#191919', display: 'block'}} to="/aboutme">About me</Link></MenuItem>
                        <MenuItem><Link style={{textDecoration: 'none', color: '#191919', display: 'block'}} to="/project">Projects</Link></MenuItem>
                        <MenuItem><Link style={{textDecoration: 'none', color: '#191919', display: 'block'}} to="/contact">Contact</Link></MenuItem>
                    </Menu>
                </div>
                </Navigation>
            </Header>
         
            <Content>
                <div className="page-content" />
                <Main />
            </Content>
        </Layout>
    </div>
    // <div className="menudiv" style={{position: 'relative'}}>
    //     <IconButton className="iconbuttonz" name="add" id="demo-menu-lower-left" />
    //     <Menu target="demo-menu-lower-left">
    //         <MenuItem><Link to="/resume">Resume</Link></MenuItem>
    //         <MenuItem><Link to="/aboutme">About me</Link></MenuItem>
    //         <MenuItem><Link to="/project">Projects</Link></MenuItem>
    //         <MenuItem><Link to="/contact">Contact</Link></MenuItem>
    //     </Menu>
    // </div>
    );
  }
}

export default App;
