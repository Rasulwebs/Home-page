import React, { useRef, Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "react-multi-carousel/lib/styles.css";
import "./styleTeacherCard.scss";
const TeacherCards = ({ teachName, teachlang, teachYear, teachImg }) => {
    const carousel = useRef();

    return (
        <>
            <div className="card">
        <img
          src={teachImg}
          className="card-img-top"
          alt="Fissure in Sandstone"
        />
        <div className="card-body">
          <h5 className="card-title">{teachName}</h5>
          <p className="card-text">
            {teachlang}
          </p>
          <p className="card-text">
          Опыт работы: <span className="teachYear ms-2">{teachYear}</span>
          </p>

          <div className="teacher-links d-flex justify-content-center">
                <a href="#">
                  <i className="bi bi-telegram"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#">
                  
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
          
        </div>
      </div>


        </>
    );
};

export default TeacherCards;
