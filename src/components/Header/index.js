import { Link, withRouter } from "react-router-dom";

import Cookies from "js-cookie";

import "./index.css";

const Header = (props) => {
  const onClickLogout = () => {
    Cookies.remove("jwt_token");
    const { history } = props;
    history.replace("/login");
  };
  return (
    <div className="nav-header">
      <div className="nav-content">
        <Link to="/" className="font-col">
          <h1>FinancePeer</h1>
        </Link>
      </div>

      <ul className="nav-menu">
        <Link to="/" className="nav-link">
          <li>Home</li>
        </Link>
        <Link to="/data" className="nav-link2">
          <li>data</li>
        </Link>
        <button
          type="button"
          className="logout-desktop-btn"
          onClick={onClickLogout}
        >
          Logout
        </button>
      </ul>
    </div>
  );
};
export default withRouter(Header);
