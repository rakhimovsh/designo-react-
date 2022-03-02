import "./Header.scss";
import logo from "../../Assets/Images/logo.png";
function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <a className="logo" href="#">
          <img src={logo} alt="Designo logo" width={202} height={27} />
        </a>
        <nav className="sitenav">
          <ul className="sitenav__list">
            <li className="sitenav__item">
              <a className="sitenav__link" href="#">
                OUR COMPANY
              </a>
            </li>
            <li className="sitenav__item">
              <a className="sitenav__link" href="#">
                LOCATIONS
              </a>
            </li>
            <li className="sitenav__item">
              <a className="sitenav__link" href="#">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
        <button className="header__hamburger"></button>
      </div>
    </header>
  );
}
export default Header;
