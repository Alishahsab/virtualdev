import React from "react";
import "../../Assits/Style/Hom.css";
import image from '../../Assits/Images/icons8_source_code 1.png'

const SectionTwo = () => {
  return (
    <>
      <div className="container-fluid section-two-bg" id="Services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center col-md-12">
              
              <h5 className="hom-ser">My Services</h5>
              <h2 className="cra-hom">Crafting stories through</h2>
              <h2 className="cra-hom">design and innovation</h2>
              <div className="row justify-content-around">
                <div className="col-lg-3 col-md-6 d-flex align-items-center main-card">
                  <div style={{width:"100%"}}>
                  <img src={image} className="service-image" alt="error"></img>
                    <h3 className="card-heading">Website Building</h3>
                    <p className="card-para">
                      Nemo design enim ipsam voluptatem quim voluptas sit
                      aspernaturaut odit auting fugit sed thisnquia consequuntur
                      magni doloreseos designer heresm qui
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 mx-1 col-md-6 d-flex align-items-center main-card">
                  <div style={{width:"100%"}}>
                  <img src={image} className="service-image" alt="error"></img>
                    <h3 className="card-heading">Custom Coding
</h3>
                    <p className="card-para">
                      Nemo design enim ipsam voluptatem quim voluptas sit
                      aspernaturaut odit auting fugit sed thisnquia consequuntur
                      magni doloreseos designer heresm qui
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex align-items-center main-card">
                  <div style={{width:"100%"}}>
                  <img src={image} className="service-image" alt="error"></img>
                    <h3 className="card-heading">Dashbord Development</h3>
                    <p className="card-para">
                      Nemo design enim ipsam voluptatem quim voluptas sit
                      aspernaturaut odit auting fugit sed thisnquia consequuntur
                      magni doloreseos designer heresm qui
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex align-items-center main-card">
                  <div style={{width:"100%"}}>
                  <img src={image} className="service-image" alt="error"></img>
                    <h3 className="card-heading">Api Development</h3>
                    <p className="card-para">
                      Nemo design enim ipsam voluptatem quim voluptas sit
                      aspernaturaut odit auting fugit sed thisnquia consequuntur
                      magni doloreseos designer heresm qui
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex align-items-center main-card">
                  <div style={{width:"100%"}}>
                  <img src={image} className="service-image" alt="error"></img>
                    <h3 className="card-heading">Wordpress Development</h3>
                    <p className="card-para">
                      Nemo design enim ipsam voluptatem quim voluptas sit
                      aspernaturaut odit auting fugit sed thisnquia consequuntur
                      magni doloreseos designer heresm qui
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex align-items-center main-card">
                  <div style={{width:"100%"}}>
                  <img src={image} className="service-image" alt="error"></img>
                    <h3 className="card-heading">Wordpress Plugin Development</h3>
                    <p className="card-para">
                      Nemo design enim ipsam voluptatem quim voluptas sit
                      aspernaturaut odit auting fugit sed thisnquia consequuntur
                      magni doloreseos designer heresm qui
                    </p>
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

export default SectionTwo;
