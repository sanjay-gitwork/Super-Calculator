import React, { useState } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('', '', e.target, '')
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        setSubmitStatus('success');
      }, (error) => {
        console.error('There was an error sending the email:', error.text);
        setSubmitStatus('failed');
      });
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <h1 className="text-center">Get In Touch!!</h1>
          <p className="text-center">Welcome to contact page! Whether you have questions, exciting opportunities, or simply want to say hello, I'm thrilled to hear from you. This is where ideas come to life, collaborations take shape, and projects flourish. Drop me a line below, and let's bring our visions together.</p>
          <hr />
        </div>
      </div>
      <div className="row my-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="card p-4 shadow">
            <h2 className="mb-4">Let's Connect!</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group mt-3">
                <label><b>Name</b></label>
                <input type="text" className="form-control" name="name" placeholder="Enter your name" />
              </div>
              <div className="form-group mt-3">
                <label><b>Email</b></label>
                <input type="email" className="form-control" name="mail" placeholder="Enter your email" />
              </div>
              <div className="form-group mt-3">
                <label><b>Message</b></label>
                <textarea className="form-control" rows={4} name="message" placeholder="Enter your message" />
              </div>
              {submitStatus === 'success' && <p className="text-success"> <b>Email sent successfully!</b></p>}
              {submitStatus === 'failure' && <p className="text-danger"><b>Failed to send email. Please try again.</b></p>}
              <button type="submit" className="btn btn-dark rounded mt-3">Submit</button>
            </form>
          </div>
        </div>

        <div className="col-lg-6">
          <img
            src="././Assets/images/contactus.jpg"
            alt="Our Team"
            className="rounded contactus-image text-center"
          />
        </div>
      </div>

    </div>
  );
};

export default Contact;
