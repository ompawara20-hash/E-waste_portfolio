import profilePhoto from "../assets/home/profile-photo.png";

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

        <div className="logo-profile">
          <img
            src={profilePhoto}
            alt="Om Pawar"
          />
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
          Pledge
        </button>

        <button
          className={activePage === "activity2" ? "active" : ""}
          onClick={() => handleNavigation("activity2")}
        >
          <span>02</span>
          Video Task
        </button>

        <button
          className={activePage === "activity3" ? "active" : ""}
          onClick={() => handleNavigation("activity3")}
        >
          <span>03</span>
          Device Anatomy
        </button>

        <button
          className={activePage === "activity4" ? "active" : ""}
          onClick={() => handleNavigation("activity4")}
        >
          <span>04</span>
          Data Analysis
        </button>

      </div>

    </nav>
  );
}

export default Navbar;