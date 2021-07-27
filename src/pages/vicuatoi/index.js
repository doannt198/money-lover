import React, { Component } from 'react';
import './index.css'
class ViCuaToi extends Component {
    render() {
        return (
          <div className="my-wallet">
            <div className="my-wallet-left">
              <div className="wallet-list">
                <div className="wallet-item">
                  <div className="title">Tính vào tổng</div>
                  <div className="wallet-item--content">
                    <img src="./assets/wallet.svg" alt="wallet" />
                    <div>
                      <div>Tiền cũ</div>
                      <div>0</div>
                    </div>
                  </div>
                </div>
                <div className="wallet-item">
                  <div className="title">Tính vào tổng</div>
                  <div className="wallet-item--content active">
                    <img src="./assets/wallet.svg" alt="wallet" />
                    <div>
                      <div>Tiền cũ</div>
                      <div>0</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-wallet-right">
              <div className="header">
                <div className="header-left">
                  <img src="./assets/close.svg" alt="close" />
                  <p>Chi tiết</p>
                </div>
                <div className="header-right">
                  <div className="button-method">
                    <span className="btn btn-delete">Xóa</span>
                    <span className="btn btn-edit">Sửa</span>
                  </div>
                </div>
              </div>
              <div className="detail-content">
                <div className="wallet-info">
                  <img src="./assets/wallet.svg" alt="" />
                  <div>
                    <div className="wallet-name">Tiền của Tano</div>
                    <div className="wallet-currency">Việt Nam Đồng</div>
                  </div>
                </div>
                <div className="user">
                  <label htmlFor>Người dùng</label>
                  <div className="user-info">
                    <img src="./assets/wallet.svg" alt="" />
                    <div>
                      <div className="user-name">tantano96</div>
                      <div className="user-email">tantanotnt96@gmail.com</div>
                    </div>
                  </div>
                </div>
                <div className="method">
                  <div className="method-item">
                    <input type="checkbox" />
                    <div>
                      <div className="not-count-total">Không tính vào tổng</div>
                      <div>Bỏ qua ví này và số dư khỏi "tổng"</div>
                    </div>
                  </div>
                  <div className="method-item">
                    <input type="checkbox" />
                    <div>
                      <div className="not-count-total">Không tính vào tổng</div>
                      <div>Bỏ qua ví này và số dư khỏi "tổng"</div>
                    </div>
                  </div>
                </div>
                <div className="share">
                  <ul>
                    <li id="share-wallet">Chia sẻ ví</li>
                    <li id="transfer-money">Chuyển tiền</li>
                    <li id="adjustContent">Điều chỉnh số dư</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default ViCuaToi;