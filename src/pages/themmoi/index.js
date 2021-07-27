import React, { Component } from 'react';
import './index.css'
class ThemMoi extends Component {
    render() {
        return (
          <div className="transaction-add">
            <div className="add-transaction">
              <h1 className="title">Thêm mới giao dịch</h1>
              <form action>
                <div className="row">
                  <div className="col-sm-12 col-md-4">
                    <div className="dropdown">
                      <div className="dropdown-menu">
                        <label className="dropdown-title">Ví</label>
                        <div className="dropdown-item">
                          <img
                            className="dropdown-item--icon"
                            src="../assets/items/icon12.png"
                            alt="icon"
                          />
                          <div className="dropdown-item--text">
                            <label>Tiền của Tano</label>
                            <img
                              src="../assets/right-chevron.svg"
                              alt=""
                              className="icon-chevron"
                            />
                          </div>
                        </div>
                        <div className="dropdown-body">
                          <div className="items">
                            <div className="item">
                              <img
                                className="item-icon"
                                src="../assets/items/icon12.png"
                                alt="icon"
                              />
                              <div className="item-info">
                                <p className="item-name">Tiền của Tano</p>
                                <p className="item-value">3,234,332</p>
                              </div>
                            </div>
                            <div className="item">
                              <img
                                className="item-icon"
                                src="../assets/items/icon12.png"
                                alt="icon"
                              />
                              <div className="item-info">
                                <p className="item-name">Tiền của Tano</p>
                                <p className="item-value">3,234,332</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4">
                    <div className="dropdown">
                      <div className="dropdown-menu">
                        <label className="dropdown-title">Nhóm</label>
                        <div className="dropdown-item">
                          <img
                            className="dropdown-item--icon"
                            src="../assets/items/icon12.png"
                            alt="icon"
                          />
                          <div className="dropdown-item--text">
                            <label>Tiền của Tano</label>
                            <img
                              src="../assets/right-chevron.svg"
                              alt=""
                              className="icon-chevron"
                            />
                          </div>
                        </div>
                        <div className="dropdown-body">
                          <div className="items">
                            <div className="item">
                              <img
                                className="item-icon"
                                src="../assets/items/icon12.png"
                                alt="icon"
                              />
                              <div className="item-info">
                                <p className="item-name">Tiền của Tano</p>
                                <p className="item-value">3,234,332</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4">
                    <div className="form-input-group">
                      <label htmlFor>Số tiền</label>
                      <div className="select-item">
                        <input type="number" defaultValue={0} />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4">
                    <div className="form-input-group">
                      <label htmlFor>Ngày</label>
                      <div className="select-item">
                        <input type="date" />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-8">
                    <div className="form-input-group">
                      <label htmlFor>Ghi chú</label>
                      <div className="select-item">
                        <div className="select-item--right">
                          <input
                            type="text"
                            defaultValue
                            placeholder="Ghi chú"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <span>Thêm chi tiết</span>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-8">
                    <div className="row">
                      <div className="col-sm-12 col-md-6">
                        <div className="form-input-group">
                          <label htmlFor>Ghi chú</label>
                          <div className="select-item">
                            <span>Với</span>
                            <img
                              src="./assets/right-chevron.svg"
                              alt="right-chevron"
                              className="right-chevron"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6">
                        <div className="form-input-group">
                          <label htmlFor>Nhắc nhở</label>
                          <div className="select-item">
                            <input type="text" placeholder="Đặt nhắc nhở" />
                            <img
                              src="./assets/right-chevron.svg"
                              alt="right-chevron"
                              className="right-chevron"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6">
                        <div className="form-input-group">
                          <label htmlFor>Địa điểm</label>
                          <div className="select-item">
                            <span>Chọn địa điểm</span>
                            <img
                              src="./assets/right-chevron.svg"
                              alt="right-chevron"
                              className="right-chevron"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6">
                        <div className="dropdown">
                          <div className="dropdown-menu">
                            <label className="dropdown-title">Sự kiện</label>
                            <div className="dropdown-item">
                              <img
                                className="dropdown-item--icon"
                                src="../assets/items/icon12.png"
                                alt="icon"
                              />
                              <div className="dropdown-item--text">
                                <label>Tiền của Tano</label>
                                <img
                                  src="../assets/right-chevron.svg"
                                  alt=""
                                  className="icon-chevron"
                                />
                              </div>
                            </div>
                            <div className="dropdown-body">
                              <div className="items">
                                <div className="item">
                                  <img
                                    className="item-icon"
                                    src="../assets/items/icon12.png"
                                    alt="icon"
                                  />
                                  <div className="item-info">
                                    <p className="item-name">Tiền của Tano</p>
                                    <p className="item-value">3,234,332</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4">
                    <div className="form-input-group image">
                      <span>Ảnh</span>
                      <span>
                        Thả các tập tin đính kèm <a href="#">Tại đây</a>{" "}
                      </span>
                      <span>
                        Định dạng tập tin hình ảnh JPG, JPGE, PNG, GIF
                      </span>
                      <span>Hình ảnh có dung lượng nhỏ hơn 2MB</span>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 not-include-report">
                    <input type="checkbox" />
                    <span>
                      <div className="report-title">Không tính vào báo cáo</div>
                      <div className="report-description">
                        Không tính giao dịch này trong các báo cáo, ví dụ như
                        Tổng quan
                      </div>
                    </span>
                  </div>
                  <div className="col-sm-12 col-md-12 btn-wrapper">
                    <button className="btn btn-cancel btn-default">Hủy</button>
                    <button className="btn btn-save">Lưu</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        ); 
    }
}

export default ThemMoi;