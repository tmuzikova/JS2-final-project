import "./Header.css";

export const Header = ({ showMenu }) => {
  return (
    <>
      {showMenu === true ? (
        <header id="home">
          <div className="header__content container">
            <div className="site-logo"></div>

            <div className="navigation">
              <button className="nav-btn"></button>
              <nav className="rollout-nav nav-closed">
                <a href="#home">domů</a>
                <a href="#menu">menu</a>
                <a href="#gallery">galerie</a>
                <a href="#contact">kontakt</a>
              </nav>
            </div>
          </div>
        </header>
      ) : (
        <header id="home">
          <div className="header__content container">
            <div className="site-logo"></div>

            <div className="navigation">
              <button className="nav-btn"></button>
              <nav className="rollout-nav nav-closed">
                <a href="/">zpět na hlavní stránku</a>
              </nav>
            </div>
          </div>
        </header>
      )}
    </>
  );
};
