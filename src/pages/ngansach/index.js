import React, { Component } from 'react';
import './index.css'
class NganSach extends Component {
    render() {
        return (
          <div className="budget">
            <div className="budget-left">
              <div className="menu-tabs">
                <div className="menu-tab-item active">Đang áp dụng</div>
                <div className="menu-tab-item">Đã kết thúc</div>
              </div>
              <div className="buget-list">
                <div className="buget-item">
                  <div className="buget-date">
                    <div className="date-time">
                      <div className="date-range">01/07/2021 - 31/07/2021</div>
                      <div className="date-remain">Còn 13 ngày</div>
                    </div>
                    <div className="date-amount">
                      <div className="amount">10,000</div>
                      <div className="amount-remain">Còn lại 9,999</div>
                    </div>
                  </div>
                  <div className="buget-content">
                    <div className="content-image">
                      <img src="./assets/items/icon12.png" alt="" />
                    </div>
                    <div className="content-body">
                      <div className="content-title">
                        <div>Bạn bè &amp; người yêu</div>
                        <div>
                          <div>10,000</div>
                          <div>Còn lại 9,999</div>
                        </div>
                      </div>
                      <div className="content-time-line">
                        <div className="time-line" />
                        <div className="today">today</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="buget-item">
                  <div className="buget-date">
                    <div className="date-time">
                      <div className="date-range">01/07/2021 - 31/07/2021</div>
                      <div className="date-remain">Còn 13 ngày</div>
                    </div>
                    <div className="date-amount">
                      <div className="amount">10,000</div>
                      <div className="amount-remain">Còn lại 9,999</div>
                    </div>
                  </div>
                  <div className="buget-content">
                    <div className="content-image">
                      <img src="./assets/items/icon12.png" alt="" />
                    </div>
                    <div className="content-body">
                      <div className="content-title">
                        <div>Bạn bè &amp; người yêu</div>
                        <div>
                          <div>10,000</div>
                          <div>Còn lại 9,999</div>
                        </div>
                      </div>
                      <div className="content-time-line">
                        <div className="time-line" />
                        <div className="today">today</div>
                      </div>
                    </div>
                  </div>
                </div>
                <a className="add-more">
                  Thêm ngân sách tất cả các khoản cho giai đoạn này
                </a>
              </div>
            </div>
            <div className="budget-right">
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
                <div className="detail-icon">
                  <img src="./assets/items/icon12.png" alt="" />
                </div>
                <div>
                  <div className="detail-info">
                    <div className="bugdet-name">Bạn bè &amp; người yêu</div>
                    <div className="name-account">Tiền của Tano</div>
                    <div className="text-small">Còn 13 ngày</div>
                    <div className="text-sma">Còn lại</div>
                    <div className="total-amount">9,99</div>
                    <div className="suggest">
                      <div>
                        <div className="text-small">Đã chi</div>
                        <span>534</span>
                      </div>
                      <div>
                        <div className="text-small">Dự kiến chi tiêu</div>
                        <span>413</span>
                      </div>
                      <div>
                        <div className="text-small">Nên chi hàng tháng</div>
                        <span>123</span>
                      </div>
                      <div>
                        <div className="text-small">
                          Thực tế chi tiêu hàng ngày
                        </div>
                        <span>1234</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="detail-chart">
                <img src="./assets/budget/chart.PNG" alt="chart" />
              </div>
              <div className="view-more">Xem danh sách giao dịch</div>
            </div>
          </div>
        );
    }
}

export default NganSach;