import React from "react";
import "./styleAdventage.css";
import callCenter from "../../assets/images/callCenter.svg";
import mans from "../../assets/images/mans.svg";
import copmImg from "../../assets/images/compIcon.svg";
import man from "../../assets/images/man.svg";
import adventageInfo from "../../assets/images/adventageInfoImg.jpg";
const AdventageInfo = () => {
  return (
    <>
      <div className="adwentageWrapp ">
        
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-12 col-md-12 colsm-12 py-5 info-wrapp">
              <h3 className="adventage-tite">Наши преимущество</h3>

              <div className="cardsWrapp d-flex">
                <div className="adventageCard">
                  <img src={callCenter} alt="callcenter" className="adventCardImg"/>
                  
                </div>
                <div className="adventageCard">
                  <img src={mans} alt="info" className="adventCardImg"/>
                  
                </div>
              </div>
              <div className="cardsWrapp d-flex">
                <div className="adventageCard">
                  <img src={copmImg} alt="computerinfp" className="adventCardImg"/>
                  
                </div>
                <div className="adventageCard">
                  <img src={man} alt="infoMAn" className="adventCardImg"/>
                  
                </div>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-12 col-md-12 col-sm-12 imgWrapp">
                <img src={adventageInfo} alt="adventinfoo"  className="adventImg"/>
            </div>
          </div>
        
      </div>
    </>
  );
};

export default AdventageInfo;
