import React from "react";
import "./styleFooter.css";
import LogoP from "../../assets/images/navlogo.svg";
const Footer = () => {
  return (
    <>
      <footer className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-12">
              <img src={LogoP} alt="footerLogo" className="mb-3" />
              <p className="footerInfo1 fs-5">
                © 2021{" "}
                <span className="fw-bold"> MUHABBAT ZIYO 2021-2022.</span>{" "}
              </p>
              <p className="footerInfo1 fs-5 my-0 py-0">Все права защищены.</p>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12 d-flex flex-column">
              <p className="footerUlLinks1 fs-4">Главный</p>
              <a href="#">Курсы</a>
              <a href="#">О нас</a>
              <a href="#">Для детей</a>
              <a href="#">Для родителей</a>
              <a href="#">Контакты</a>
              <a href="#">Контакты</a>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12 d-flex flex-column">
              <p className="footerUlLinks2 fs-4">Курсы</p>
              <a href="#">Арабский язык</a>
              <a href="#">Английский язык</a>
              <a href="#">Английский язык</a>
              <a href="#">Програмирования</a>
            
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12  d-flex flex-column">
              <p className="footerUlLinks3 fs-4">Свяжитись снами</p>
              <a href="#">+998 99 458 85 25</a>
              <a href="#">+998 99 458 85 25</a>
      

              <div className="mesengLinks d-flex mt-3">
              <i class="bi bi-telegram fs-3 mx-2"></i>
              <i class="bi bi-instagram fs-3 mx-2"></i>
              <i class="bi bi-youtube fs-3 mx-2"></i>
              </div>
            
            </div>

            
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
