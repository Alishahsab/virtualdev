import React from "react";
import "../../Assits/Style/Hom.css";
import img from "../../Assits/Images/Place-Your-Image-Here 1.png";
import image1 from '../../Assits/Style/7xm-White 1.png'
const SectionOne = () => {
  return (
    <>
      <div className="container-fluid bga" id="Home">
        <div className="container">
          <div className="row mainsec-one">
            <div className="col-md-12 col-lg-6">
              <div className="main-text">
                
                <h1 className="name text-white">Hi!</h1>
                <h1 className="text-white">Comprehensive<span className="dynamic-txts">Design and Development</span> Services from Our Agency</h1>
                {/* <div class="wrapper">
                  <div class="static-txt">I'm a</div>
                  <ul class="dynamic-txts">
                    <li>
                      <span>YouTuber</span>
                    </li>
                    <li>
                      <span>Designer</span>
                    </li>
                    <li>
                      <span>Developer</span>
                    </li>
                    <li>
                      <span>Freelancer</span>
                    </li>
                  </ul>
                </div> */}

                <p className="main-para text-white">
                  
As a leading design and development agency, we specialize in delivering client-centric web design and IT solutions that yield tangible business results.
                </p>
                <div className="d-flex align-items-center">
                  <div className="main-btn">
                    <a className="cta">
                      <span className="text-white">
                       Contact Us
                        <i className="fa-solid fa-download text-white"></i>
                      </span>
                    </a>
                  </div>
                  {/* <button className="video-btn">
                    <div className="video-icon me-2">
                      <i className="fa-solid fa-play text-white"></i>
                    </div>
                    Watch the video
                  </button> */}
                </div>
              </div>
            </div>
            <div className="col-md-12 main-hoverpic col-lg-6 d-flex justify-content-center align-items-center">
              <div className="images">
                {/* <img src={image1} className="" alt="error"></img> */}
                <img
                  src={img}
                  alt="error"
                  className="img-fluid main-img animated-image"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
