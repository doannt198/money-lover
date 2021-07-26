import React, { Component } from 'react';

class LienKetNganHang extends Component {
    render() {
        return (
          <div className="bank">
            <div className="bank-link">
              <input type="text" />
            </div>
            <div className="bank-list">
              <div className="bank-item">
                <img
                  src="./assets/bank/pvcombank.png"
                  alt=""
                  placeholder="Tìm kiếm"
                />
                <div className="name">PVCom Bank</div>
                <div className="country">Viet Nam</div>
              </div>
              <div className="bank-item">
                <img
                  src="./assets/bank/pvcombank.png"
                  alt=""
                  placeholder="Tìm kiếm"
                />
                <div className="name">PVCom Bank</div>
                <div className="country">Viet Nam</div>
              </div>
            </div>
          </div>
        );
    }
}

export default LienKetNganHang;