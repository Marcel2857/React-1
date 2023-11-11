import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="main-container nav-wrapper">
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-first">moja firma</li>
            <li className="redirect-btn-one">
              <a href="#specialists" className="nav-item">
                o nas
              </a>
            </li>
            <li className="redirect-btn-two">
              <a href="#offer" className="nav-item">
                oferta{" "}
              </a>
            </li>
            <li className="nav-item-disabled">kontakt</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
