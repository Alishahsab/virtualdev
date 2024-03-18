import React from "react";
import "../../Assits/Style/Hom.css";
import CountUp from "react-countup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import { firebaseApp } from "../../firebase/firebase";

// const db = firebaseApp.firestore();

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  message: Yup.string().required("Message is required"),
});

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const SectionFour = () => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    // try {
    //   await db.collection('usermsg').add(values);
    //   resetForm();
    //   alert('Form submitted successfully!');
    // } catch (error) {
    //   console.error('Error submitting form:', error);
    //   alert('An error occurred while submitting the form. Please try again later.');
    // } finally {
    //   setSubmitting(false);
    // }
  };
  
  return (
    <div className="container-fluid bga">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-12 d-flex align-items-center">
            <div className="big-text">
              <h1 className="text-white">
                <span className="big-head"> Design</span>
                <span>and Innovation</span>
              </h1>
              <p className="big-para text-white">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                odit auting fugit sed thisnquia consequuntur magni dolores eos
                designer heresm qui ratione voluptatem sequi nesciuNeque porro
                quisquam est, oursqui dolorem ipsum quia dolor sit amet
                consectetur, adipisci velit, sed quia non numquam 10k+
                Complete project
              </p>
              <p className="big-para text-white">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                odit auting fugit sed thisnquia consequuntur magni dolores eos
                designer heresm qui ratione voluptatem sequi nesciuNeque porro
                quisquam est, oursqui dolorem ipsum quia dolor sit amet
                consectetur, adipisci velit, sed quia non numquam 10k+
                Complete project
              </p>
              <p className="big-para text-white">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                odit auting fugit sed thisnquia consequuntur magni dolores eos
                designer heresm qui ratione voluptatem sequi nesciuNeque porro
                quisquam est, oursqui dolorem ipsum quia dolor sit amet
                consectetur, adipisci velit, sed quia non numquam 10k+
                Complete project
              </p>
              <div className="counters d-flex">
                <div className="counter-col text-white">
                  <span>got services</span>
                  <h4 className="hm">
                    <CountUp
                      start={0}
                      style={{ display: "inline-block", color: "#55e6a5" }}
                      delay={0}
                      end={30}
                    />
                    +
                  </h4>
                </div>
                <div className="counter-col text-white">
                  <span>positive reviews</span>
                  <h4 className="hm">
                    <CountUp
                      start={0}
                      style={{ display: "inline-block" }}
                      delay={0}
                      end={40}
                    />
                    +
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-5 form-main">
            <div className="from">
              <h2 className="get-in text-white">Get Touch me</h2>
              <p className="text-white">For your car we will do everything advice design in us repairs and maintenance We are the some preferred.</p>
              <div className="contact-form">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <div>
                        <Field
                          type="text"
                          name="name"
                          className="name-field"
                          placeholder="Enter your Name"
                        />
                        <ErrorMessage name="name" className="text-white" component="div" />
                      </div>
                      <div>
                        <Field
                          type="email"
                          name="email"
                          className="name-field"
                          placeholder="Enter your Email"
                        />
                        <ErrorMessage name="email" className="text-white" component="div" />
                      </div>
                      <div>
                        <Field
                          type="tel"
                          name="phone"
                          className="name-field "
                          placeholder="Enter your Phone"
                        />
                        <ErrorMessage name="phone" className="text-white" component="div" />
                      </div>
                      <div>
                        <Field
                          as="textarea"
                          className="name-field"
                          name="message"
                          placeholder="Enter your Message"
                        />
                        <ErrorMessage name="message" className="text-white" component="div" />
                      </div>
                      <button type="submit" className="submit" disabled={isSubmitting}>
                        Submit
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
