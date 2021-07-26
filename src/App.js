
 import React, { Component } from 'react';
 import './App.css';
import MainMenu from './components/mainmenu';
 import Sidebar from './components/sidebar';
 import HeaderWrap from './components/header-wrap';
 import Main from './components/main';
 class App extends Component {
   render() {
     return (
      <div className="container">
      <div className="container-wrapper">
        <Sidebar/>
        <MainMenu></MainMenu>
        <div className="right">
          <div className="right-wrapper">
            <HeaderWrap></HeaderWrap>
            {/* Main */}
              <Main></Main>
          </div>
        </div>
      </div>
    </div>
    
     );
   }
 }
 
 export default App;