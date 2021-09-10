import "./footer.css";
import { SiGmail, SiLinkedin, SiGithub, SiDevDotTo } from "react-icons/si";

const Footer = () => {
  return (
    <div className="footer">
      <div style={{ textAlign: "center" }}>
        <div className="footer-text">Wanna talk? Connect with me</div>
        <div className="contact-social">
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:abhishek022kk@gmail.com"
          >
            <SiGmail className="contact-gmail contact-icon" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/abhishek0810/"
          >
            <SiLinkedin className="contact-in contact-icon" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/abhishekkumar08"
          >
            <SiGithub className="contact-gh contact-icon" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://dev.to/abhishekkumar"
          >
            <SiDevDotTo className="contact-dev contact-icon" />
          </a>
        </div>
      </div>
      <div className="footer-bar">
        <div>Wanna contribute 🎉</div>
        <div>
          Made with 💖 by <strong>Abhishek</strong>
        </div>
        <div>Want to report an issue or request a feature?</div>
      </div>
    </div>
  );
};

export default Footer;
