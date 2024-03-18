import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div
        className="container-fluid footer-area"
        style={{ position: "relative" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12 text-center">
              <div className="subscribe-box">
                <h4 className="sub-heading">subscribe our newsletter</h4>
                <div className="input-area text-center">
                  <form className="input-area text-center">
                    <input
                      placeholder="Your Mail"
                      aria-label="Your Mail"
                      className="form-controll mb-0"
                      required
                      type="email"
                      aria-describedby="basic-addon2"
                    ></input>
                    <button className="btnn" type="submit">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mt-3">
              <h4 className="about-us mb-5 cursor text-white">About us</h4>
              <p className="cursor text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Placeat consequatur veritatis neque quos tempore nostrum
                voluptate molestias saepe.
              </p>

              <button className="fb-btn cursor">
                <i className="fa-brands fa-facebook-f"></i>
              </button>

              <button className="fb-btn mx-2 cursor">
                <i className="fa-brands fa-twitter"></i>
              </button>

              <button className="fb-btn mx-1 cursor">
                <i className="fa-brands fa-instagram"></i>
              </button>

              <button className="fb-btn mx-2 cursor">
                <i className="fa-brands fa-linkedin-in"></i>
              </button>
            </div>
            <div className="col-lg-4 col-md-6 mt-3">
              <div className="footer-col footer-news">
                <h4 className="about-us mb-5 text-white"> Popular News</h4>
                <div className="news-item">
                  <div className="news-img cursor">
                   
                  </div>
                  <a className="footer-p cursor text-white">
                    Magnam ipsa optio hic sequi fuga cumque minima, harum.
                  </a>
                  <span className="foter-date cursor text-white">
                    <a>24 Aug, 2022</a>
                  </span>
                </div>
              </div>
              <div className=" footer-news">
                <div className="news-item">
                  <div className="news-img cursor">
                   
                  </div>
                  <a className="footer-p cursor text-white">
                    220 Even Green Hamton Road, New York
                  </a>
                  <span className="foter-date cursor text-white">
                    <a>24 Aug, 2022</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-4  col-md-6 mt-3">
              <div className="footer-col footer-contact">
                <ul
                  className="fotter-ul text-white"
                  style={{ paddingInlineStart: "0px" }}
                >
                  <h4 className="about-us mb-5 my-2 text-white ">
                    {" "}
                    Contact us
                  </h4>
                  <li className="my-2 cursor">
                    <i className="fa-solid fa-location-dot foter-icon"></i>220
                    Even Green Hamton Road, New York
                  </li>
                  <li className="my-2 cursor">
                    <i className="fa-solid fa-phone foter-icon"></i>+012 123 123
                    123
                  </li>
                  <li className="my-2 cursor">
                    <i className="fa-solid fa-envelope foter-icon"></i>220 Even
                    Green Hamton Road, New York
                  </li>
                  <li className="my-2 cursor">
                    <i className="fa-solid fa-location-dot foter-icon"></i>
                    alishahryk9@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
