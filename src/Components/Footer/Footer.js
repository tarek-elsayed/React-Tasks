import Logo from "../../images/logo.svg";
import IconEmail from "../../images/icon-email.svg";
import IconLocation from "../../images/icon-location.svg";
import IconPhone from "../../images/icon-phone.svg";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <img src={Logo} alt="Logo" />
      <div className="lists">
        <ul className="list_footer">
          <li className="list">
            <img src={IconLocation} alt="Icon Location" />
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </li>
        </ul>
        <ul className="list_footer">
          <li className="list">
            <img src={IconPhone} alt="Icon Phone" />
            <p className="text"> +1-543-123-4567</p>
          </li>
          <li className="list">
            <img src={IconEmail} alt="Icon Email" />
            <p className="text">example@fylo.com</p>
          </li>
        </ul>
        <ul className="list_footer">
          <li className="list">
            <a
              href="#"
              target="_blank"
              className="text"
            >
              About Us
            </a>
          </li>
          <li className="list">
            <a
              href="#"
              target="_blank"
              className="text"
            >
              Jobs
            </a>
          </li>
          <li className="list">
            <a
              href="#"
              target="_blank"
              className="text"
            >
              Press
            </a>
          </li>
          <li className="list">
            <a
              href="#"
              target="_blank"
              className="text"
            >
              Blog
            </a>
          </li>
        </ul>
        <ul className="list_footer">
          <li className="list">
            <a
              href="#"
              target="_blank"
              className="text"
            >
              Contact Us
            </a>
          </li>
          <li className="list">
            <a
              href="#"
              target="_blank"
              className="text"
            >
              Terms
            </a>
          </li>
          <li className="list">
            <a
              href="#"
              target="_blank"
              className="text"
            >
              Privacy
            </a>
          </li>
        </ul>
        <ul className="list_footer">
          <li className="list">
            <a
              href="#"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
          </li>
          <li className="list">
            <a
              href="#"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </li>
          <li className="list">
            <a
              href="#"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
      
    </footer>
  );
}
