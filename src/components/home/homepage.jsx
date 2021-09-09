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
          <div
            style={{
              fontWeight: "700",
              textAlign: "center",
              fontSize: "2.5rem",
            }}
          >
            Coderhub
          </div>
        </div>
        <div className="home-sub-text">
          Coder hub is a place where you can get all the material related to
          your placements🚀✨
        </div>
      </div>
    </div>
  );
};

export default Homepage;
