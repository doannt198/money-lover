import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";
class HeaderWrap extends Component {
    render() {
        return (
          <div className="header-wrapper">
            <div className="header-left">
              <div className="wallet-wrapper">
                <div className="wallet-image">
                  <img src="./assets/wallet.png" alt="wallet" />
                </div>
                <div className="wallet-info">
                  <div className="wallet-name">
                    Tiền của Tano
                    <img src="./assets/down-chevron.svg" alt="" />
                  </div>
                  <div className="wallet-amount">328,412,895</div>
                  <div className="wallet-list" id="wallets">
                    <div className="wallet-item title">
                      <span>Chọn ví</span>
                    </div>
                    <div className="wallet-item detail">
                      <img src="./assets/global.png" alt="global" />
                      <div>
                        <div className="wallet-item--name">Tổng cộng</div>
                        <div className="wallet-item--amount">0</div>
                      </div>
                    </div>
                    <div className="wallet-item">
                      <span>Tính vào tổng</span>
                    </div>
                    <div className="wallet-item detail">
                      <img src="./assets/wallet.png" alt="wallet" />
                      <div>
                        <div className="wallet-item--name">Tiền cũ</div>
                        <div className="wallet-item--amount">0</div>
                      </div>
                    </div>
                    <div className="wallet-item">
                      <span>Không tính vào tổng</span>
                    </div>
                    <div className="wallet-item detail">
                      <img src="./assets/wallet.png" alt="wallet" />
                      <div className="wallet-item--active">
                        <span>
                          <div className="wallet-item--name">Tiền cũ</div>
                          <div className="wallet-item--amount">333,412,895</div>
                        </span>
                        <img src="./assets/check.svg" alt="check" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-right">
              <div className="method">
                <div className="method-item">
                  <img src="./assets/date.svg" alt="date" />
                </div>
                <div className="method-item">
                  <img src="./assets/time.svg" alt="time" />
                </div>
                <div className="method-item">
                  <img src="./assets/search.svg" alt="search" />
                </div>
                <div className="method-item">
                  <Link to="/themmoi" className="btn btn-add-transaction">
                    Thêm giao dịch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default HeaderWrap;