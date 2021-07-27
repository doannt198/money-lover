import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class Sidebar extends Component {
    render() {
        return (
          <div className="sidebar">
            <div className="menu-action">
              <img src="./assets/menu.svg" alt="menu" className="menu-icon" />
            </div>
            <div className="account-wrapper">
              <div className="logo">
                <img src="./assets/badge.svg" alt="badge" />
              </div>
              <div className="account-name">Tantanotnt96</div>
              <div className="account-email">tantanotnt96@gmail.com</div>
            </div>
            <ul className="menu-list">
              <li>
                <Link to="/quanlytaikhoan">
                  <img
                    src="./assets/person.svg"
                    alt="person"
                    className="icon"
                  />
                  <div className="menu-info">
                    <label>Quản lý tài khoản</label>
                    <img
                      src="./assets/right-chevron.svg"
                      alt="chevron"
                      className="chevron"
                    />
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/vicuatoi">
                  <img
                    src="./assets/wallet.svg"
                    alt="wallet"
                    className="icon"
                  />
                  <div className="menu-info">
                    <label>Ví của tôi</label>
                    <img
                      src="./assets/right-chevron.svg"
                      alt="chevron"
                      className="chevron"
                    />
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/nhom">
                  <img
                    src="./assets/package.svg"
                    alt="package"
                    className="icon"
                  />
                  <div className="menu-info">
                    <label>Nhóm</label>
                    <img
                      src="./assets/right-chevron.svg"
                      alt="chevron"
                      className="chevron"
                    />
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/lienketnganhang">
                  <img src="./assets/link.svg" alt="link" className="icon" />
                  <div className="menu-info">
                    <label>Liên kết ngân hàng</label>
                    <img
                      src="./assets/right-chevron.svg"
                      alt="chevron"
                      className="chevron"
                    />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        );
    }
}

export default Sidebar;