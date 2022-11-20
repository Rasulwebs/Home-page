import React, { useRef, useEffect } from "react";
import "./styleNumber.css";

const NumberInfo = () => {
  const circleP = useRef();
  const valueC = useRef();
  const circleP2 = useRef();
  const valueC2 = useRef();
  const circleP3 = useRef();
  const valueC3 = useRef();

  let progressValue = 0;
  let progressEndValue = 52;
  let speed = 10;

  let progress = setInterval(() => {
    progressValue++;
    circleP.current.style.background = `conic-gradient(#32D74B ${260}deg, #9dffab83 ${260}deg)`;
    if (progressValue === progressEndValue) {
      clearInterval(progress);
    }
    valueC.current.textContent = `12${progressValue}`;
  }, speed);

  let progressValue2 = 0;
  let progressEndValue2 = 20;
  let speed2 = 30;

  let progress2 = setInterval(() => {
    progressValue2 ++;
    circleP2.current.style.background = `conic-gradient(#32D74B ${100}deg, #9dffab83 ${100}deg)`;
    if (progressValue2 === progressEndValue2) {
      clearInterval(progress2);
    }
    valueC2.current.textContent = progressValue2;
  }, speed2);

  let progressValue3 = 0;
  let progressEndValue3 = 30;
  let speed3 = 30;

  let progress3 = setInterval(() => {
    progressValue3++;
    circleP3.current.style.background = `conic-gradient(#32D74B ${315}deg, #9dffab83 ${315}deg)`;
    if (progressValue3 === progressEndValue3) {
      clearInterval(progress3);
    }
    valueC3.current.textContent = `${progressValue3}+`;
  }, speed3);

  useEffect(() => {}, []);

  return (
    <>
      <div className="info-bg">
        <div className="container">
          <div className="number-wrapp">
            <div className="row">
              <div className="col-lg-5 numbInfo-links d-flex ">
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
              <div className="col-lg-7 d-flex">
                <div className="circular-progress mx-3" ref={circleP}>
                  <div className="value-circlee">
                    <h2 className="circValuee text-center" ref={valueC}></h2>
                    <h4>Учеников</h4>
                  </div>
                </div>

                <div className="circular-progress2 mx-3" ref={circleP2}>
                  <div className="value-circlee2">
                    <h2 className="circValuee text-center" ref={valueC2}></h2>
                    <h4>Учителей</h4>
                  </div>
                </div>

                <div className="circular-progress3 mx-3" ref={circleP3}>
                  <div className="value-circlee3">
                    <h2 className="circValuee text-center" ref={valueC3}></h2>
                    <h4>Топ вузы</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NumberInfo;
