import React from "react";
import "./styleFAQ.css";
const FAQ = () => {
  return (
    <>
      <div className="container">
        <h3 className="faqTitle my-4">FAQ</h3>

        <div className="row">
          <div className="col-lg-7 col-md-7 col-sm-12">
            <div className="accordion shadow" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-mdb-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classNamees that we use to style each element.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-mdb-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classNamees that we use to style each element.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-mdb-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classNamees that we use to style each element.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-mdb-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classNamees that we use to style each element.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-mdb-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classNamees that we use to style each element.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-5 col-sm-12 d-flex flex-column align-items-center faqformWrapp">
            <h4 className="faqFormsTitle">Остались вопросы?</h4>

            <input type="text" placeholder="Имя" className="form-control my-2 py-2 w-50 faqInput"/>
            <input type="text" placeholder="Телефон номер" className="form-control my-2 py-2 w-50 faqInput"/>

            <button className="btn btnFaq mt-4 ">Отправить</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
