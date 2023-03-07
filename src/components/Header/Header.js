import logo from "../../assets/images/BrainFlix-logo.svg";
import uploadIcon from "../../assets/icons/upload.svg";
import avatarBg from "../../assets/images/Mohan-muruge.jpg";

import Button from "../Button/Button";
import Search from "../Search/Search";
import Avatar from "../Avatar/Avatar";

import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <img className="header__logo" src={logo} alt="BrainFlix-logo" />
          <nav className="header__nav">
            <Search />
            <Button src={uploadIcon} text={"Upload"} />
            <Avatar src={avatarBg} />
          </nav>
        </div>
      </div>
    </header>
  );
}
