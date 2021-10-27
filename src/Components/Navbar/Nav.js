import { Link } from "react-router-dom";
import "./Nav.css"
import logo from '../../images/logo.svg'


export default function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light nav-color">
      <div class="container">
        <Link to="/" className="brand">
          <img src={logo} alt="logo" />
        </Link>
        <ul class="navbar-nav  mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link text-light" to="/feature">
                Features
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-light" to="/team">
                Team
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-light" to="/sginin">
                Sign in 
              </Link>
            </li>
          </ul>
      </div>
    </nav>
  );
}
