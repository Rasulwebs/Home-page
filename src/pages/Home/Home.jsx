import React from "react";

import "./styleHomePage.css";
import CourseLangCard from "../../components/Course-lang-card/CourseLangCard";
import NumberInfo from "../../components/NumberInfo/NumberInfo";
import Arabian from "../../assets/images/Arabian.jpg";
import London from "../../assets/images/london.jpg";
import Moscow from "../../assets/images/moscow.jpg";
import ComputerImg from "../../assets/images/computer.jpg";
import CoursePriceCard from "../../components/Course-price-card/CoursePriceCard";
import TeacherCards from "../../components/Course-teacher-card/TeacherCards";
import teachAziz from "../../assets/images/teachAziz-Eng.jpg";
import teachUlug from "../../assets/images/teachUlug-programm.jpg";
import teachVlad from "../../assets/images/teachVlad-rus.jpg";
import teachSabina from "../../assets/images/teachSabina-Arabian.jpg";
import AdventageInfo from "../../components/Adventage-info/AdventageInfo";
import forBabyImg from "../../assets/images/forBaby.jpg";
import froFamilyImg from "../../assets/images/forFamily.jpg";
import aboutImg from "../../assets/images/aboutImgg.jpg";
import FAQ from "../../components/FAQsection/FAQ";
import TeacherComing from "../../components/TeacherComing/TeacherComing";

const Home = () => {
  return (
    <>
      <NumberInfo />

      <div className="container">
        <h2 className="courses">Курсы</h2>
        <div className="langCardWrapp">
          <CourseLangCard
            langImg={Arabian}
            langName={"Арабский язык"}
            langInfoText={"Длительность курса 3 месяца 12 уроков в месяц"}
          />

          <CourseLangCard
            langImg={London}
            langName={"Английский язык"}
            langInfoText={"Длительность курса 3 месяца 12 уроков в месяц"}
          />

          <CourseLangCard
            langImg={Moscow}
            langName={"Русский язык"}
            langInfoText={"Длительность курса 3 месяца 12 уроков в месяц"}
          />

          <CourseLangCard
            langImg={ComputerImg}
            langName={"Компьютерные уроки"}
            langInfoText={"Длительность курса 3 месяца 12 уроков в месяц"}
          />
        </div>
      </div>
      <div className="container">
        <div className="priceInfoWrapp">
          <CoursePriceCard
            priceCardTitle={"Арабский язык"}
            price={"150 000 тыс"}
          />
          <CoursePriceCard
            priceCardTitle={"Английский язык"}
            price={"550 000 тыс"}
          />
          <CoursePriceCard
            priceCardTitle={"Русский язык"}
            price={"450 000 тыс"}
          />
          <CoursePriceCard
            priceCardTitle={"Компьютерные уроки"}
            price={"750 000 тыс"}
          />
        </div>
      </div>

      <div className="container teachwrapp m7-5">
        <h3 className="teachInfo">Преподователи</h3>

        <div
          id="carouselExampleIndicators"
          className="carousel slide carusellWrapp mb-5"
          data-mdb-ride="carousel"
        >
          <div className="carousel-indicators caruselActiveBtn">
            <button
              type="button"
              data-mdb-target="#carouselExampleIndicators"
              data-mdb-slide-to="0"
              className="active caruselAPgeBtn"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-mdb-target="#carouselExampleIndicators"
              data-mdb-slide-to="1"
              aria-label="Slide 2"
              className="caruselAPgeBtn"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="teacherCardWrapp">
                <TeacherCards
                  teachName={"Азиз"}
                  teachlang={"Учитель английского языка"}
                  teachYear={"5 лет"}
                  teachImg={teachAziz}
                />
                <TeacherCards
                  teachName={"Улугбек"}
                  teachlang={"Учитель программирования"}
                  teachYear={" 7 лет"}
                  teachImg={teachUlug}
                />
                <TeacherCards
                  teachName={"Владимир"}
                  teachlang={"Учитель русского языка"}
                  teachYear={"4 лет"}
                  teachImg={teachVlad}
                />
                <TeacherCards
                  teachName={"Сабина"}
                  teachlang={"Учитель арабского языка"}
                  teachYear={" 8 лет"}
                  teachImg={teachSabina}
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="teacherCardWrapp">
                <TeacherCards
                  teachName={"Азиз"}
                  teachlang={"Учитель английского языка"}
                  teachYear={"5 лет"}
                  teachImg={teachAziz}
                />
                <TeacherCards
                  teachName={"Улугбек"}
                  teachlang={"Учитель программирования"}
                  teachYear={" 7 лет"}
                  teachImg={teachUlug}
                />
                <TeacherCards
                  teachName={"Владимир"}
                  teachlang={"Учитель русского языка"}
                  teachYear={"4 лет"}
                  teachImg={teachVlad}
                />
                <TeacherCards
                  teachName={"Сабина"}
                  teachlang={"Учитель арабского языка"}
                  teachYear={" 8 лет"}
                  teachImg={teachSabina}
                />
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-mdb-target="#carouselExampleIndicators"
            data-mdb-slide="prev"
          >
            <span className="fs-2 prevBtn" aria-hidden="true">
              <i className="bi bi-arrow-left-circle"></i>
            </span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-mdb-target="#carouselExampleIndicators"
            data-mdb-slide="next"
          >
            <span className="fs-2 nextBtn" aria-hidden="true">
              <i className="bi bi-arrow-right-circle"></i>
            </span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <AdventageInfo />

      <div className="froInfoo">
        <div className="container">
          <div className="row my-5">
            <div className="col-lg-6 col-md-12 col-sm-12 mx-auto">
              <h4 className="forbabyTitle mb-4">Для детей</h4>
              <p className="forbabyText1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                mauris faucibus risus tristique. Donec faucibus phasellus
                accumsan scelerisque feugiat odio vulputate etiam. Mi elit
                placerat cursus ultricies nibh et accumsan pellentesque.
                Fringilla pellentesque felis tellus scelerisque turpis aliquam.
                Elementum odio sodales vulputate odio sit amet, etiam risus eu.
                Tincidunt feugiat aliquet tristique odio. Natoque purus tellus
                nullam lacus facilisis nulla.
              </p>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 forBabyImg">
              <img src={forBabyImg} alt="fro Baby" className="forImgg" />
            </div>
          </div>
          <div className="row my-5">
            <div className="col-lg-6 col-md-12 col-sm-12 forFamilyImg">
              <img src={froFamilyImg} alt="fro Baby" className="forImgg" />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 ps-4 forFamilyInfo mx-auto">
              <h4 className="forFamilyTitle mb-4">Для родителей</h4>
              <p className="forFamilyText1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                mauris faucibus risus tristique. Donec faucibus phasellus
                accumsan scelerisque feugiat odio vulputate etiam. Mi elit
                placerat cursus ultricies nibh et accumsan pellentesque.
                Fringilla pellentesque felis tellus scelerisque turpis aliquam.
                Elementum odio sodales vulputate odio sit amet, etiam risus eu.
                Tincidunt feugiat aliquet tristique odio. Natoque purus tellus
                nullam lacus facilisis nulla.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="aboutInfoWrapp mt-5 mb-5">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <h3 className="aboutInfoTitle my-2">О нас</h3>

              <p className="aboutText1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                mauris faucibus risus tristique. Donec faucibus phasellus
                accumsan scelerisque feugiat odio vulputate etiam. Mi elit
                placerat cursus ultricies nibh et accumsan pellentesque.
                Fringilla pellentesque felis tellus scelerisque turpis aliquam.
                Elementum odio sodales vulputate odio sit amet, etiam risus eu.{" "}
              </p>

              <br />
              <p className="aboutText2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                mauris faucibus risus tristique. Donec faucibus phasellus
                accumsan scelerisque feugiat odio vulputate etiam. Mi elit
                placerat cursus ultricies nibh et accumsan pellentesque.
                Fringilla pellentesque felis tellus scelerisque turpis aliquam.
                Elementum odio sodales vulputate odio sit amet, etiam risus eu.
              </p>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12">
              <img src={aboutImg} alt="aboutImg" className="aboutImgg" />
            </div>
          </div>
        </div>
      </div>

      <div className="faqWrapp">
        <FAQ />
      </div>

      <div className="comngteachWrapp">
        <TeacherComing />
      </div>

      <div className="rewiewsWrapp">
        <div className="container">
          <h3 className="text-center reviewTitle">Оставить заявку</h3>
          <p className="text-center reviewTex">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
            nunc id felis, eros.
          </p>

          <div className="revFormWrapp mt-5">
            <input
              type="text"
              placeholder="Имя"
              className="form-control mx-3 reviewInpt"
            />
            <input
              type="text"
              placeholder="Телефон номер"
              className="form-control mx-3 reviewInpt"
            />
            <button className="btn revFormbtn mx-3">Отправить</button>
          </div>
        </div>
      </div>

      <div className="container">
        <h3 className="mt-5">Отзывы</h3>
      </div>
      <div className="rateWrapp mt-4">
        <div className="container">
          <div className="rateCardWrapp d-flex justify-contetn-around mt-5">
            <div className="cardd p-3 bg-light mx-2 shadow rounded-5">
              <div className="card-top d-flex align-items-center">
                <div className="logoName bg-warning text-light fs-1 rounded-9 px-3">
                  m
                </div>
                <p className="rateManName m-2 fs-4">Muhammad</p>
              </div>
              <div className="card-body">
                <p className="rateCardText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  eu viverra orci amet, justo donec non tristique.
                </p>
              </div>
            </div>
            <div className="cardd p-3 bg-light mx-2 shadow rounded-5">
              <div className="card-top d-flex align-items-center">
                <div className="logoName bg-warning text-light fs-1 rounded-9 px-4">
                  u
                </div>
                <p className="rateManName m-2 fs-4">Ulug'bek</p>
              </div>
              <div className="card-body">
                <p className="rateCardText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  eu viverra orci amet, justo donec non tristique.
                </p>
              </div>
            </div>
            <div className="cardd p-3 bg-light mx-2 shadow rounded-5">
              <div className="card-top d-flex align-items-center">
                <div className="logoName bg-warning text-light fs-1 rounded-9 px-4">
                  u
                </div>
                <p className="rateManName m-2 fs-4">Ulug'bek</p>
              </div>
              <div className="card-body">
                <p className="rateCardText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  eu viverra orci amet, justo donec non tristique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blogWrapp">
        <div className="container">
          <h3 className="blogTitle">Блог</h3>

          <div className="blogCardWrapp d-flex justify-content-around flex-wrap">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src={Arabian}
                class="card-img-top"
                alt="Sunset Over the Sea"
              />
              <div class="card-body">
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Imperdiet fermentum amet est accumsan, gravida enim.
                </p>
                <p className="moreText text-secondary">еще...</p>
              </div>
            </div>
            <div class="card" style={{ width: "18rem" }}>
              <img
                src={London}
                class="card-img-top"
                alt="Sunset Over the Sea"
              />
              <div class="card-body">
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Imperdiet fermentum amet est accumsan, gravida enim.
                </p>
                <p className="moreText text-secondary">еще...</p>
              </div>
            </div>
            <div class="card" style={{ width: "18rem" }}>
              <img
                src={Moscow}
                class="card-img-top"
                alt="Sunset Over the Sea"
              />
              <div class="card-body">
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Imperdiet fermentum amet est accumsan, gravida enim.
                </p>
                <p className="moreText text-secondary">еще...</p>
              </div>
            </div>
            <div class="card" style={{ width: "18rem" }}>
              <img
                src={ComputerImg}
                class="card-img-top"
                alt="Sunset Over the Sea"
              />
              <div class="card-body">
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Imperdiet fermentum amet est accumsan, gravida enim.
                </p>
                <p className="moreText text-secondary">еще...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contactUsWrapp">
        <div className="container">
          <h3 className="contactTitle mb-4 fs-2">Контакты</h3>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 mb-2">
              <p className="adressText text-secondary fs-3">Ардесс:</p>
              <p className="adressInfo fw-bold fs-4 mb-2">
                Sharof Rashidov Shoh ko'chasi, Тошкент, Узбекистан
              </p>
              <p className="telNumber text-secondary fs-3">Телефон номер:</p>
              <p className="tellInfo1 fw-bold fs-4 mb-2">+998 99 458 85 25</p>
              <p className="tellInfo2 fw-bold fs-4 mb-2">+998 99 458 85 25</p>

              <p className="messengerInfo text-secondary fs-3">
                Социальные сети:
              </p>
              <div className="messngApp d-flex">
                <i class="bi bi-instagram mx-2 fs-2"></i>
                <i class="bi bi-telegram mx-2 fs-2"></i>
                <i class="bi bi-youtube mx-2 fs-2"></i>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mt-2">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.743344158615!2d69.20744366119165!3d41.27092383043465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a3d32fd18b5%3A0xab5f80ce6aeaa081!2z0L_RgNC-0YHQv9C10LrRgiDQkdGD0L3RkdC00LrQvtGALCDQotCw0YjQutC10L3Rgiwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1668927506732!5m2!1sru!2s"   style={{"border":"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
