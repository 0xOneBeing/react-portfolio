import "./index.scss";
import { Link } from "react-router-dom";
import LogoS from "../../assets/images/logo-s.png";
import LogoSubtitle from "../../assets/images/logo_sub.png";

const Sidebar = () => {
  <div className="nav-bar">
    <Link className="logo" to="/">
      <div>
        <p>Hello</p>
      </div>
      <img src={LogoS} alt="Logo" />
      <img src={LogoSubtitle} alt="Logo Subtitle" />
    </Link>
  </div>;
};

export default Sidebar;
