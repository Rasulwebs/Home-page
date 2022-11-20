import React from "react";
import "./styleCourdeLangCard.css";
const CourseLangCard = ({langImg, langName, langInfoText }) => {
  return (
    <>
      <div className="card">
        <img
          src={langImg}
          className="card-img-top"
          alt="Fissure in Sandstone"
        />
        <div className="card-body">
          <h5 className="card-title">{langName}</h5>
          <p className="card-text">
            {langInfoText}
          </p>
          <a href="#!" className="btn  langCardInfoBtn">
          Подробнее
          </a>
        </div>
      </div>
    </>
  );
};

export default CourseLangCard;
