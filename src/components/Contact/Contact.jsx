import React, { useRef } from "react";
import contactPng from "../../assets/login.png";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_02hf7ka', 'template_rc0rjf3', form.current, {
        publicKey: 'g9xjgitxLbb2BPxRA',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="mt-5">
      <div className="row d-flex align-items-center">
        <div className="col-md-6">
          <h1>Contact with Us</h1>
          <form className="input-box" ref={form} onSubmit={sendEmail}>
            <input
              className="w-75 p-3 m-1"
              type="text"
              name="user_name" 
              placeholder="Type your name "
            />
            <br />
            <input
              className="w-75 p-3 m-1"
              type="email"
              name="user_email"
              placeholder="Type your email "
            />
            <br />
            <input
              className="w-75 p-5 m-2"
              type="text"
              name="message"
              placeholder="Type your message "
            />
            <br />
            <input type="submit" value="Send" />
            {/* <button class="btn btn-info w-75 p-3 font-weight-bold text-uppercase">
              Send Email
            </button> */}
          </form>
        </div>
        {/* Side Poster------- */}
        <div className="col-md-6">
          <div className="w-100">
            <img
              className="w-100"
              src={contactPng}
              alt="posterPng"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
