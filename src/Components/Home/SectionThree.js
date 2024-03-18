import React from "react";
import "../../Assits/Style/Hom.css";
import img from "../../Assits/Images/About us.avif";
const SectionThree = () => {
  return (
    <>
      <div className="container-fluid section-two-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <div className="has-animation">
                <h5 className="hom-ser">About Me</h5>
                <h2 className="cra-hom">Transforming visions into</h2>
                <h2 className="cra-hom">exceptional portfolios</h2>
              </div>
              <div className="tf-text">
                <p className="para-sec-three text-white">
                  Nemo design enim ipsam voluptatem quim voluptas sit aspernatur
                  aut odit auting fugit sed thisnquia consequuntur magni dolores
                  eos designer heresm qui ratione{" "}
                </p>
                <div className="main-btn">
                  <a className="cta">
                    <span className="text-white">
                      Downlode CV{" "}
                      <i className="fa-solid fa-download text-white"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-12"
              style={{ position: "relative" }}
            >
              <div className="side-pic">
                <img src={img} alt="error" className="img-fluid side-img animated-image"></img>
                {/* <div className="green-bg animated-image"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionThree;
