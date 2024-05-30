import "./Navbar.css";

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="navbar">
          <div className="nav_logo">
            <h1>
              <span>_ASCII </span>
              <sup>IMG</sup>
            </h1>
          </div>

          <div
            className="navbar__item -blue"
            onClick={() => scrollToSection("0")}
          >
            <span className="navbar__icon">
              <i className="ri-home-line"></i>
            </span>
          </div>

          <div
            className="navbar__item -orange"
            onClick={() => scrollToSection("1")}
          >
            <span className="navbar__icon">
              <i className="ri-rocket-2-line"></i>
            </span>
          </div>
          <div
            className="navbar__item -navy-blue"
            onClick={() => scrollToSection("2")}
          >
            <span className="navbar__icon">
              <i className="ri-vip-crown-line"></i>
            </span>
          </div>
          <div
            className="navbar__item -yellow"
            onClick={() => scrollToSection("3")}
          >
            <span className="navbar__icon">
              <i className="ri-lightbulb-flash-line"></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
