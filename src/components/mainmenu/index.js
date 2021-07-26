import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

function MyLink({ label, to,img,alt,img1,alt1, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <div className={match ? "menu-item active" : "menu-item"}>
      {match && "> "}
      <Link to={to}>
        <img src={img} alt={alt} />
        <p>{label}</p>
        <img src={img1} alt={alt1} />
      </Link>
    </div>
  );
}

class MainMenu extends Component {
    render() {
        return (
            <div className="left">
            <ul className="menu-list">
              <li className="menu-item">
                <img src="./assets/menu.svg" alt="menu" className="menu-icon" />
              </li>

              <MyLink to="/sogiaodich" label="Sổ giao dịch" img="./assets/transaction.svg" alt="transaction"></MyLink>
              <MyLink to="/baocao" label="Báo cáo" img="./assets/report.svg" alt="report"></MyLink>
              <MyLink to="/ngansach" label="Ngân sách " img="./assets/budget.svg" alt="budget"></MyLink>
              <MyLink to="/cuahang" label="Cửa Hàng " img="./assets/cart.svg" alt="cart" img1="./assets/extend.svg" alt="extend"></MyLink>
              <MyLink to="/trogiup" label="Trợ giúp " img="./assets/help.svg" alt="help" img1="./assets/extend.svg" alt="extend"></MyLink>
              
            </ul>
          </div>
        );
    }
}

export default MainMenu;