import React, {useState} from "react";
import "../../Assits/Style/Navbar.css";
import {NavLink} from 'react-router-dom'
const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    ////////////////////scroll////////////
    const changebg = () => {
      if (window.scrollY >= 1) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    const changetext = () => {
      if (window.scrollY >= 1) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    window.addEventListener("scroll", changebg, changetext);
  return (
    <>
      <div className="container-fluid navbar-bg d-flex justify-content-center">
      <div className={` container navbar-bg  ${
            navbar ? "navbar-main-lastchance-one" : "navbar-main-lastchance"
          }`} >
        <nav className="navbar navbar-expand-lg ">
          <div className="container">
            <a
              className="navbar-brand"
              href="#"
              style={{ color: "white", fontSize: "44px" }}
            >
              C<span style={{color:'#55e6a5'}}>E</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {/* <span className="navbar-toggler-icon"></span> */}
              <i className="fa-solid fa-bars" style={{color:'#55e6a5'}}></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to='/' className="nav-link nav-text" aria-current="page" href="#">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-text" aria-current="page" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-text" aria-current="page" href="Services">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link  nav-text" aria-current="page" href="#">
                    Project
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-text" href="#">
                    Blog
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link nav-text" aria-disabled="true">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      </div>
    </>
  );
};

export default Navbar;
