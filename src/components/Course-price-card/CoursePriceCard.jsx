import React from "react";
import "./stylePriceCard.css";
const CoursePriceCard = ({priceCardTitle, price}) => {
  return (
    <>
      <div className="card ">
        <h5 className="card-title pt-4 text-center">{priceCardTitle}</h5>
        <div className="card-body">
          <span className="price-info-wrapp">
            <i className="bi bi-check-circle-fill checkIcon"></i>
            <p className="card-text ms-2">12 человек в группе</p>
          </span>
          <span className="price-info-wrapp d-flex">
            <i className="bi bi-check-circle-fill checkIcon"></i>
            <p className="card-text ms-2">Книга, хуснихат</p>
          </span>
          <span className="price-info-wrapp d-flex">
            <i className="bi bi-check-circle-fill checkIcon"></i>
            <p className="card-text ms-2">12 домашних работ</p>
          </span>
          <span className="price-info-wrapp d-flex">
            <i className="bi bi-check-circle-fill checkIcon"></i>
            <p className="card-text ms-2">Поддержка учителя</p>
          </span>
          <span className="price-info-wrapp d-flex">
            <i className="bi bi-check-circle-fill checkIcon"></i>
            <p className="card-text ms-2">После каждого месяца экзамен</p>
          </span>
          <span className="price-info-wrapp d-flex">
            <i className="bi bi-check-circle-fill checkIcon"></i>
            <p className="card-text ms-2">Длительность урока 2 часа</p>
          </span>

          <h3 className="prices text-center fw-700 mt-4">{price}</h3>
        </div>
      </div>
    </>
  );
};

export default CoursePriceCard;
