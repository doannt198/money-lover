import React, { Component } from 'react';
import './index.css'
class BaoCao extends Component {
    render() {
        return (
          <div className="report">
            <div className="report-left">
              <div className="balance">
                <div className="balance-start">
                  <div className="balance-title">Số dư đầu</div>
                  <div className="balance-amount">+312,660,269</div>
                </div>
                <div className="balance-end">
                  <div className="balance-title">Số dư đầu</div>
                  <div className="balance-amount">+312,660,269</div>
                </div>
              </div>
              <div className="chart">
                <div className="chart-header">
                  <div className="chart-title">
                    <div className="title-bar">Thu nhập ròng</div>
                    <div className="amount-bar">+15,503,626</div>
                  </div>
                  <div className="chart-body">
                    <img
                      src="./assets/report/chart-body.png"
                      alt="chart-body"
                      className="chart-body-img"
                    />
                  </div>
                </div>
              </div>
              <div className="donut-chart">
                <div className="income">
                  <img src="./assets/report/income.PNG" alt="" />
                </div>
                <div className="outcome">
                  <img src="./assets/report/income.PNG" alt="" />
                </div>
              </div>
              <div className="debt-loan">
                <ul>
                  <li>
                    <p>Nợ</p>
                    <span>
                      <p className="income">0</p>
                      <img
                        src="./assets/right-chevron.svg"
                        alt="right-chevron"
                        className="right-chevron"
                      />
                    </span>
                  </li>
                  <li>
                    <p>Cho vay</p>
                    <span>
                      <p className="expense">0</p>
                      <img
                        src="./assets/right-chevron.svg"
                        alt="right-chevron"
                        className="right-chevron"
                      />
                    </span>
                  </li>
                  <li>
                    <p>Khác</p>
                    <span>
                      <p className="other">0</p>
                      <img
                        src="./assets/right-chevron.svg"
                        alt="right-chevron"
                        className="right-chevron"
                      />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="report-right">
              <div className="header">
                <div className="header-left">
                  <img src="./assets/close.svg" alt="close" />
                  <p>Khoản chi</p>
                </div>
                <div className="header-right">
                  <div className="display-type active">
                    <img src="./assets/chart.svg" alt="chart" />
                  </div>
                  <div className="display-type">
                    <img src="./assets/statistical.svg" alt="statistical" />
                  </div>
                </div>
              </div>
              <div className="chart-wrapper">
                <div className="chart-content">
                  <div className="chart">
                    <img src="./assets/report/chart-detail.PNG" alt="" />
                  </div>
                  <div className="amount">2,254,474</div>
                </div>
                <div className="category-list">
                  <ul>
                    <li className="category-item">
                      <span className="item-left">
                        <img
                          src="./assets/items/icon10.png"
                          alt="transaction"
                        />
                        <label>Bạn bè &amp; Người yêu</label>
                      </span>
                      <span className="item-right">
                        <p className="expense">2356345</p>
                        <img
                          src="./assets/right-chevron.svg"
                          alt="right-chevron"
                          className="right-chevron"
                        />
                      </span>
                    </li>
                    <li className="category-item">
                      <span className="item-left">
                        <img
                          src="./assets/items/icon10.png"
                          alt="transaction"
                        />
                        <label>Hóa đơn &amp; Tiện ích</label>
                      </span>
                      <span className="item-right">
                        <p className="expense">23423423</p>
                        <img
                          src="./assets/right-chevron.svg"
                          alt="right-chevron"
                          className="right-chevron"
                        />
                      </span>
                    </li>
                    <li className="category-item">
                      <span className="item-left">
                        <img
                          src="./assets/items/icon10.png"
                          alt="transaction"
                        />
                        <label>Ăn uống</label>
                      </span>
                      <span className="item-right">
                        <p className="expense">234234234</p>
                        <img
                          src="./assets/right-chevron.svg"
                          alt="right-chevron"
                          className="right-chevron"
                        />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
        );
    }
}

export default BaoCao;