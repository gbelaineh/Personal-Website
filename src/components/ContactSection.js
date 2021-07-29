import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Response = () => {
  return (
    <div className="ContactSection">
      <p>Your message has been successfully sent. I will get back to you soon.</p>
    </div>
  );
};
const ContactSection = () => {
  const [response, setRespone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cs9lux9', 'template_zp55p4l', e.target, 'user_N1o3RqToU4qPaeTGV189A')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
    setRespone(true);
  };

  setTimeout(() => {
    setRespone(false);
  }, 5000);

  return (
    <form onSubmit={sendEmail}>
      <div className="ContactSection">
        <div className="rightSection">
          <h2> Say Hello! </h2>
          <span>Full Name</span>
          <br />
          <input className="input" type="text" name="fullName" required />
          <br />
          <span>Email</span>
          <br />
          <input className="input" type="text" name="email" required />
        </div>
        <div className="leftSection">
          <span>Message</span>
          <br />
          <textarea className="input" type="text" name="message" required />
          <br />
          <button type="submit">SUBMIT</button>

          <div>{response ? <Response /> : null}</div>
        </div>

      </div>
    </form>
  );
};

export default ContactSection;
