import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-header">
        <div style={{ width: "16%" }}>
          <Link to="/">
            <img src={logo} alt="logo" height="85px" width="85px" />
          </Link>
        </div>
        <div style={{ width: "18%" }}>
          <Link to="/problems">Problems</Link>
        </div>
        <div style={{ width: "18%" }}>
          <Link to="/resources">Resources</Link>
        </div>
        <div style={{ width: "18%" }}>
          <Link to="/about">About</Link>
        </div>
      </div>
      <div className="login-signup">
        <div className="login">
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/signup">Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
