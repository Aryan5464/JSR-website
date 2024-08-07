/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./ContactUs.css";
import Navbar from '../Navbar/Navbar';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import CallIcon from '@mui/icons-material/Call';


function ContactUs() {

  // function handleForm(event) { event.preventDefault() };

  return (
    <div className="app_ContactUs">
      <Navbar></Navbar>
      <section id="page-header" className="about-header">
        <h2>#let's_talk</h2>
        <p className="contact-p">LEAVE A MESSAGE. We Love to hear from you!</p>
      </section>

      <section id="contact">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>Visit Us!</h2>
          <h3>Head Office</h3>
          <div>
            <li>
              <LocationOnIcon></LocationOnIcon>
              <p>
                Ajman Free Zone - C1-1102, Sheikh Rashed Bin Saeed Al Maktoum road, Liwara 1, Al Bustan, Ajman
              </p>
            </li>
            <li>
              <MailIcon></MailIcon>
              <p>jsr@jsr-intlfzc.com</p>
            </li>
            <li>
                {/* <h4>Telephone :</h4> */}
                <CallIcon></CallIcon>
                <p>+971 6 746 2488</p>
              </li>
              <li>
                {/* <h4>Mobile :</h4> */}
                <SmartphoneIcon ></SmartphoneIcon>
                <p>+971 50 481 8295</p>
              </li>
            <li>
              <AccessTimeIcon></AccessTimeIcon>
              <p>Monday to Saturday:9.00am to 7.00pm</p>
            </li>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10677.734185566449!2d55.44554420308834!3d25.42040982691397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5784a7c97153%3A0x2f7b6f7ff376bcb3!2sAjman%20Free%20Zone!5e0!3m2!1sen!2sin!4v1718096248291!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* <section id="form-details">
        <form name="contact-us" action="" method="post" onSubmit={handleForm}>
          <span>LEAVE A MESSAGE</span>
          <h2>We love to hear from you..</h2>
          <input type="text" placeholder="Your Name" name="Name" style={{ color: "black" }} />
          <input type="email" placeholder="E-mail" name="E-mail" required style={{ color: "black" }} />
          <input type="text" placeholder="Subject" name="Subject" style={{ color: "black" }} />
          <textarea
            name="Message"
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
            required
            style={{ color: "black" }}
          ></textarea>
          <button>Submit</button>
        </form>
        <div className="people">
          <div>
            <img src="people/1.png" alt="" />
            <p>
              <span>John Doe </span>Senior Marketing Manager <br /> Phone:+000
              123 000 77 88 <br /> Email:contact@example.com
            </p>
          </div>
          <div>
            <img src="people/2.png" alt="" />
            <p>
              <span>William Smith </span>Senior Marketing Manager <br />{" "}
              Phone:+000 123 000 77 88 <br /> Email:contact@example.com
            </p>
          </div>
          <div>
            <img src="people/3.png" alt="" />
            <p>
              <span>Emma Stone </span>Senior Marketing Manager <br /> Phone:+000
              123 000 77 88 <br /> Email:contact@example.com
            </p>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default ContactUs;
