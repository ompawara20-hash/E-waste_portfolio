function Navbar({ activePage, setActivePage }) {

  const handleNavigation = (page) => {
    setActivePage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (

    <nav className="navbar">

      <div
        className="navbar-logo"
        onClick={() => handleNavigation("home")}
      >

        <div className="logo-symbol">
          ♻
        </div>

        <div className="logo-text">
          <strong>E-WASTE</strong>
          <span>PORTFOLIO</span>
        </div>

      </div>


      <div className="nav-links">

        <button
          className={activePage === "home" ? "active" : ""}
          onClick={() => handleNavigation("home")}
        >
          <span>00</span>
          Home
        </button>

        <button
          className={activePage === "activity1" ? "active" : ""}
          onClick={() => handleNavigation("activity1")}
        >
          <span>01</span>
          Activity 1
        </button>

        <button
          className={activePage === "activity2" ? "active" : ""}
          onClick={() => handleNavigation("activity2")}
        >
          <span>02</span>
          Activity 2
        </button>

        <button
          className={activePage === "activity3" ? "active" : ""}
          onClick={() => handleNavigation("activity3")}
        >
          <span>03</span>
          Activity 3
        </button>

      </div>

    </nav>
  );
}

export default Navbar;