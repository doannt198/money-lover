import React, { Component } from 'react';
import './index.css'
class QuanLyTaiKhoan extends Component {
    render() {
        return (
          <div className="manage-account">
            <div className="manage-account-header">
              <img
                src="./assets/close.svg"
                alt="close"
                className="icon-close"
              />
              <h2>Quản lý tài khoản</h2>
              <a href="#" className="btn btn-logout">
                Đăng xuất
              </a>
            </div>
            <div className="manage-account-account">
              <div className="level">
                <img src="./assets/badge.svg" alt="" />
              </div>
              <div className="info">
                <div>Tantanotnt96</div>
                <div>tantanotnt96@gmail.com</div>
              </div>
            </div>
            <div className="manage-account-upgrade">
              <div className="background" />
              <div className="content">
                <label htmlFor>Nâng cấp để sử dụng tính năng cao cấp</label>
                <button className="btn btn-upgrade">
                  Xem tùy chọn nâng cấp
                </button>
              </div>
            </div>
            <div className="devices">
              <div className="title">Thiết bị (5/5)</div>
              <ul>
                <li>
                  <img src="./assets/android.svg" alt="android" />
                  <div className="device-info">
                    <div>
                      <div>Web browser</div>
                      <div>Thiết bị này</div>
                    </div>
                  </div>
                </li>
                <li>
                  <img src="./assets/android.svg" alt="android" />
                  <div className="device-info">
                    <div>Web browser</div>
                    <img src="./assets/close.svg" alt="" />
                  </div>
                </li>
                <li>
                  <img src="./assets/window.svg" alt="window" />
                  <div className="device-info">
                    <div>Web browser</div>
                    <img src="./assets/close.svg" alt="" />
                  </div>
                </li>
              </ul>
            </div>
            <div className="remove-account">Xóa tài khoản</div>
          </div>
        );
    }
}

export default QuanLyTaiKhoan;