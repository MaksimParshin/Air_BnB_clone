import logo from "../images/airbnb 1.svg";

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <img src={logo} alt="logo" className="header__logo" />
      </nav>
    </header>
  );
}

export default Header;
