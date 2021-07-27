
 import React, { Component } from 'react';
 import './App.css';
import MainMenu from './components/mainmenu';
 import Sidebar from './components/sidebar';
 import HeaderWrap from './components/header-wrap';
 import Main from './pages/main';
 import BaoCao from './pages/baocao';
 import NganSach from './pages/ngansach';
 import CuaHang from './pages/cuahang';
 import TroGiup from './pages/trogiup';
 import QuanLyTaiKhoan from './pages/quanlytaikhoan';
 import ViCuaToi from './pages/vicuatoi';
 import Nhom from './pages/nhom';
 import LienKetNganHang from './pages/lienketnganhang';
 import ThemMoi from './pages/themmoi';
 import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
 class App extends Component {
   render() {
     return (
       <Router>
      <div className="container">
      <div className="container-wrapper">
        <Sidebar/>
        <MainMenu></MainMenu>
        <div className="right">
          <div className="right-wrapper">
            <HeaderWrap></HeaderWrap>
            {/* Main */}
            <Switch>
          <Route exact path="/sogiaodich">
            <Main/>
          </Route>
          <Route path="/baocao">
            <BaoCao />
          </Route>
          <Route path="/ngansach">
            <NganSach />
          </Route>
          <Route path="/cuahang">
            <CuaHang />
          </Route>
          <Route path="/trogiup">
            <TroGiup/>
          </Route>
          <Route path="/quanlytaikhoan">
            <QuanLyTaiKhoan />
          </Route>
          <Route path="/vicuatoi">
            <ViCuaToi/>
          </Route>
          <Route path="/nhom">
            <Nhom/>
          </Route>
          <Route path="/lienketnganhang">
            <LienKetNganHang/>
          </Route>
          <Route path="/themmoi">
            <ThemMoi/>
          </Route>
        </Switch>
          </div>
        </div>
      </div>
    </div>
    </Router>
     );
   }
 }
 
 export default App;