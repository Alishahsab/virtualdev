import React from "react";
import "../../Assits/Style/Hom.css";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import Projects from "./Projects";
import Testimonial from "./Testimonial";
import Marquee from "./Marque";
import Footer from "../../Reuseable/Footer/Footer";
const Home = () => {
  return (
    <>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour/>
      {/* <SectionFive/> */}
      <Projects/>
      <Testimonial/>
      <Marquee/>
      <Footer/>
    </>
  );
};

export default Home;
