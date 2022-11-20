import React from "react";
import "./styleComingTeach.css";
import comingTeachCircle from "../../assets/images/comingTeachCircle.png";
import comingTGirl from "../../assets/images/comingTGirl.png";
const TeacherComing = () => {
  return (
    <>
      <div className="comingTeachWrapp">
        <div className="row rrow">
          <div className="col-lg-3 circleeImgWrapp">
            <img
              src={comingTeachCircle}
              alt="comingTeachCirle"
              className="comingTeachCirle"
            />
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 d-flex align-items-center formssWrappp">
            <div className="ctwrapp ">
              <div className="inputsWrappp">
                <h4 className="comingTeachTitlee">Стать учителем</h4>
                <input
                  type="text"
                  placeholder="Имя"
                  className="form-control my-3 comingTinpt"
                />
                <input
                  type="text"
                  placeholder="Телефон номер"
                  className="form-control my-3 comingTinpt"
                />
                <button className="btn comingTeachBtn">Отправить</button>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 girlTeachImgWrapp d-flex justify-content-center">
            <img
              src={comingTGirl}
              alt="comingTeacehGirl"
              className="comingTeacehGirl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherComing;
