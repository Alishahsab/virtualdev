import React from "react";
import "../../Assits/Style/Hom.css";
import Slider from "react-slick";
import img from "../../Assits/Images/one.jpg";
import imgone from "../../Assits/Images/quot.png";
// import React from "react";
// import Slider from "react-slick";

const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="container-fluid bga">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12 text-center">
              <h5 className="projects-sec ">Client Reviews</h5>
              <h1 className="text-white">My Testimonial</h1>
            </div>
            <div className="col-lg-12 col-md-12 text-center">
              {/* <div className="">
                <Slider {...settings}>
                  <div className=" d-flex justify-content-center">
                    <div className="testi mx-1" style={{ width: "90%" }}>
                      <div className="testi-img">
                        <img src={img} alt="error" className="img-fluid"></img>
                      </div>
                      <h3 className="client-name text-white">
                        Alexzander Badar
                      </h3>
                      <h5 className="service-name text-white">
                        Graphic Designer
                      </h5>
                      <p className="d-flex text-white">
                        Beautiful minimalist design and great, fast response
                        with support. Highly recommend. Thanks Marketify!
                        <img className="img-fluid coma" src={imgone}></img>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <div className="testi mx-1" style={{ width: "90%" }}>
                      <div className="testi-img">
                        <img src={img} alt="error" className="img-fluid"></img>
                      </div>
                      <h3 className="client-name text-white">
                        Alexzander Badar
                      </h3>
                      <h5 className="service-name text-white">
                        Graphic Designer
                      </h5>
                      <p className="d-flex text-white">
                        Beautiful minimalist design and great, fast response
                        with support. Highly recommend. Thanks Marketify!
                        <img className="img-fluid coma" src={imgone}></img>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <div className="testi mx-1" style={{ width: "90%" }}>
                      <div className="testi-img">
                        <img src={img} alt="error" className="img-fluid"></img>
                      </div>
                      <h3 className="client-name text-white">
                        Alexzander Badar
                      </h3>
                      <h5 className="service-name text-white">
                        Graphic Designer
                      </h5>
                      <p className="d-flex text-white">
                        Beautiful minimalist design and great, fast response
                        with support. Highly recommend. Thanks Marketify!
                        <img className="img-fluid coma" src={imgone}></img>
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <div className="testi mx-1" style={{ width: "90%" }}>
                      <div className="testi-img">
                        <img src={img} alt="error" className="img-fluid"></img>
                      </div>
                      <h3 className="client-name text-white">
                        Alexzander Badar
                      </h3>
                      <h5 className="service-name text-white">
                        Graphic Designer
                      </h5>
                      <p className="d-flex text-white">
                        Beautiful minimalist design and great, fast response
                        with support. Highly recommend. Thanks Marketify!
                        <img className="img-fluid coma" src={imgone}></img>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <div className="testi mx-1" style={{ width: "90%" }}>
                      <div className="testi-img">
                        <img src={img} alt="error" className="img-fluid"></img>
                      </div>
                      <h3 className="client-name text-white">
                        Alexzander Badar
                      </h3>
                      <h5 className="service-name text-white">
                        Graphic Designer
                      </h5>
                      <p className="d-flex text-white">
                        Beautiful minimalist design and great, fast response
                        with support. Highly recommend. Thanks Marketify!
                        <img className="img-fluid coma" src={imgone}></img>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <div className="testi mx-1" style={{ width: "90%" }}>
                      <div className="testi-img">
                        <img src={img} alt="error" className="img-fluid"></img>
                      </div>
                      <h3 className="client-name text-white">
                        Alexzander Badar
                      </h3>
                      <h5 className="service-name text-white">
                        Graphic Designer
                      </h5>
                      <p className="d-flex text-white">
                        Beautiful minimalist design and great, fast response
                        with support. Highly recommend. Thanks Marketify!
                        <img className="img-fluid coma" src={imgone}></img>
                      </p>
                    </div>
                  </div>
                </Slider>
              </div> */}
               <div className="slider-container">
      <Slider {...settings}>
        <div className="d-flex justify-content-center">
        <div className="testi mx-1 " style={{ width: "90%" }}>
                      <div className="testi-img">
                        <img src={img} alt="error" className="img-fluid"></img>
                      </div>
                      <h3 className="client-name text-white">
                        Alexzander Badar
                      </h3>
                      <h5 className="service-name text-white">
                        Graphic Designer
                      </h5>
                      <p className="d-flex text-white">
                        Beautiful minimalist design and great, fast response
                        with support. Highly recommend. Thanks Marketify!
                        <img className="img-fluid coma" src={imgone}></img>
                      </p>
                    </div>
        </div>
        <div>
        <div className="testi mx-1" style={{ width: "90%" }}>
                      <div className="testi-img">
                        <img src={img} alt="error" className="img-fluid"></img>
                      </div>
                      <h3 className="client-name text-white">
                        Alexzander Badar
                      </h3>
                      <h5 className="service-name text-white">
                        Graphic Designer
                      </h5>
                      <p className="d-flex text-white">
                        Beautiful minimalist design and great, fast response
                        with support. Highly recommend. Thanks Marketify!
                        <img className="img-fluid coma" src={imgone}></img>
                      </p>
                    </div>
        </div>
        <div>
        <div className="testi mx-1" style={{ width: "90%" }}>
                      <div className="testi-img">
                        <img src={img} alt="error" className="img-fluid"></img>
                      </div>
                      <h3 className="client-name text-white">
                        Alexzander Badar
                      </h3>
                      <h5 className="service-name text-white">
                        Graphic Designer
                      </h5>
                      <p className="d-flex text-white">
                        Beautiful minimalist design and great, fast response
                        with support. Highly recommend. Thanks Marketify!
                        <img className="img-fluid coma" src={imgone}></img>
                      </p>
                    </div>
        </div>
        <div>
        <div className="testi mx-1" style={{ width: "90%" }}>
                      <div className="testi-img">
                        <img src={img} alt="error" className="img-fluid"></img>
                      </div>
                      <h3 className="client-name text-white">
                        Alexzander Badar
                      </h3>
                      <h5 className="service-name text-white">
                        Graphic Designer
                      </h5>
                      <p className="d-flex text-white">
                        Beautiful minimalist design and great, fast response
                        with support. Highly recommend. Thanks Marketify!
                        <img className="img-fluid coma" src={imgone}></img>
                      </p>
                    </div>
        </div>
        <div>
        <div className="testi mx-1" style={{ width: "90%" }}>
                      <div className="testi-img">
                        <img src={img} alt="error" className="img-fluid"></img>
                      </div>
                      <h3 className="client-name text-white">
                        Alexzander Badar
                      </h3>
                      <h5 className="service-name text-white">
                        Graphic Designer
                      </h5>
                      <p className="d-flex text-white">
                        Beautiful minimalist design and great, fast response
                        with support. Highly recommend. Thanks Marketify!
                        <img className="img-fluid coma" src={imgone}></img>
                      </p>
                    </div>
        </div>
        <div>
        <div className="testi mx-1" style={{ width: "90%" }}>
                      <div className="testi-img">
                        <img src={img} alt="error" className="img-fluid"></img>
                      </div>
                      <h3 className="client-name text-white">
                        Alexzander Badar
                      </h3>
                      <h5 className="service-name text-white">
                        Graphic Designer
                      </h5>
                      <p className="d-flex text-white">
                        Beautiful minimalist design and great, fast response
                        with support. Highly recommend. Thanks Marketify!
                        <img className="img-fluid coma" src={imgone}></img>
                      </p>
                    </div>
        </div>
        <div>
        <div className="testi mx-1" style={{ width: "90%" }}>
                      <div className="testi-img">
                        <img src={img} alt="error" className="img-fluid"></img>
                      </div>
                      <h3 className="client-name text-white">
                        Alexzander Badar
                      </h3>
                      <h5 className="service-name text-white">
                        Graphic Designer
                      </h5>
                      <p className="d-flex text-white">
                        Beautiful minimalist design and great, fast response
                        with support. Highly recommend. Thanks Marketify!
                        <img className="img-fluid coma" src={imgone}></img>
                      </p>
                    </div>
        </div>
        <div>
        <div className="testi mx-1" style={{ width: "90%" }}>
                      <div className="testi-img">
                        <img src={img} alt="error" className="img-fluid"></img>
                      </div>
                      <h3 className="client-name text-white">
                        Alexzander Badar
                      </h3>
                      <h5 className="service-name text-white">
                        Graphic Designer
                      </h5>
                      <p className="d-flex text-white">
                        Beautiful minimalist design and great, fast response
                        with support. Highly recommend. Thanks Marketify!
                        <img className="img-fluid coma" src={imgone}></img>
                      </p>
                    </div>
        </div>
      </Slider>
    </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
