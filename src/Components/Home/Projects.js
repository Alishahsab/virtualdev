import React from "react";
import "../../Assits/Style/Hom.css";
import img from '../../Assits/Images/wow-hair.png'
const Projects = () => {
  return (
    <>
      <div className="container-fluid bga">
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-12 col-md-12">
              <h5 className="projects-sec">My Recent Projects</h5>
              <h1 className="text-white">Elevate your brand to new</h1>
              <h1 className="text-white">
                heights with our portfolio expertise
              </h1>
            </div>
            <div className="row" style={{display:'flex', justifyContent:'space-between'}}>
            <div className="col-lg-4 col-md-12 d-flex justify-content-center align-items-center">
              <div class="image-wrap" style={{width:"100%"}}>
                {/* <a href="https://rahmanzeb.com"> */}
                  <img src={img} className="img-fluid" />
                {/* </a> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-12 d-flex justify-content-center align-items-center">
              <div class="image-wrap" style={{width:"100%"}}>
                {/* <a href="https://rahmanzeb.com"> */}
                  <img src={img} className="img-fluid" />
                {/* </a> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-12 d-flex justify-content-center align-items-center">
              <div class="image-wrap"  style={{width:"100%"}}>
                {/* <a href="https://rahmanzeb.com"> */}
                  <img src={img} className="img-fluid" />
                {/* </a> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-12 d-flex justify-content-center align-items-center">
              <div class="image-wrap" style={{width:"100%"}}>
                {/* <a href="https://rahmanzeb.com"> */}
                  <img src={img} className="img-fluid" />
                {/* </a> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-12 d-flex justify-content-center align-items-center">
              <div class="image-wrap" style={{width:"100%"}}>
                {/* <a href="https://rahmanzeb.com"> */}
                  <img src={img} className="img-fluid" />
                {/* </a> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-12 d-flex justify-content-center align-items-center">
              <div class="image-wrap" style={{width:"100%"}}>
                {/* <a href="https://rahmanzeb.com"> */}
                  <img src={img} className="img-fluid" />
                {/* </a>  */}
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
