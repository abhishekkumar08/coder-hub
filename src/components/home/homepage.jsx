import logo from "../../assets/logo.png";
import "./homepage.css";
const Homepage = () => {
  return (
    <div>
      <div className="home-content">
        <div className="home-main-logo">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="home-logo-text">Coderhub</div>
        </div>
        <div className="home-sub-text">
          Coder hub is a place where you can get all the material related to
          your placements.🚀✨
        </div>
        <div>
          <button className="signin-button" onClick={() => console.log("Sign in clicked")}>Signin</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
