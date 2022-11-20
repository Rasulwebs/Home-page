import React from "react";
import "./styleNavbar.css";
import Navlogo from "../../assets//images/navlogo.svg";
import heroImg from "../../assets/images/heroImg.jpg";

const Navbar = () => {
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg shadow-none border-0">
        {/* <!-- Container wrapper --> */}
        <div className="container ">
          {/* <!-- Navbar brand --> */}
          <a className="navbar-brand navImg me-2" href="https://mdbgo.com/">
            <img src={Navlogo} alt="navlogo" loading="lazy" />
          </a>

          {/* <!-- Toggle button --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list"></i>
          </button>

          {/* <!-- Collapsible wrapper --> */}
          <div
            className="collapse navbar-collapse ms-5"
            id="navbarButtonsExample"
          >
            {/* <!-- Left links --> */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <ul className="navbar-nav">
                  {/* <!-- Dropdown --> */}
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Курсы
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  О нас
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  Для детей
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  Для родителей
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  Контакты
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  Блог
                </a>
              </li>
            </ul>
            {/* <!-- Left links --> */}

            <div className="d-flex align-items-center mll">
              <ul className="navbar-nav">
                {/* <!-- Icon dropdown --> */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="flag-united-kingdom flag m-0"></i>
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="flag-united-kingdom flag"></i>English
                        <i className="fa fa-check text-success ms-2"></i>
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="flag-poland flag"></i>Polski
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="flag-china flag"></i>中文
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="flag-japan flag"></i>日本語
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="flag-germany flag"></i>Deutsch
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="flag-france flag"></i>Français
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="flag-spain flag"></i>Español
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="flag-russia flag"></i>Русский
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="flag-portugal flag"></i>Português
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Collapsible wrapper --> */}
        </div>
        {/* <!-- Container wrapper --> */}
      </nav>

      <div className="hero py-5">
        <div className="container">
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-12 col-md-12 col-sm-12 hero-left">
              <h2 className="heroText">
                Время обновлений и расширений границ вместе с{" "}
                <span className="blacknHero">MUHABBAT</span>{" "}
                <span className="greenHero">ZIYO </span>
              </h2>

              <p className="hero-text my-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                dictum nec ac enim ullamcorper risus tempor, posuere purus.{" "}
              </p>

              <button className="btn heroBtn">Оставить заявку</button>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-12 col-md-12 col-sm-12 hero-right">
              <img src={heroImg} alt="heroimg" className="heroinfoImg" />

              
            </div>
          
          </div>
       
        </div>
     
      </div>
      <div className="apppp-links d-flex flex-column ">
                <a href="#" className="shadow">
                  <i className="bi bi-telegram"></i>
                </a>
                <a href="#" className="shadow">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="shadow">
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
      {/* <!-- Navbar --> */}
    </>
  );
};

export default Navbar;
