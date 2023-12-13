import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <h1 className="text-center">Privacy Policy</h1>
          <p className="text-center">At SuperCalculator, we take your privacy seriously. This privacy policy outlines how we collect, use, and protect your
           information when you use our calculators and visit our website.</p>
          <hr />
        </div>
      </div>
      {/* <div className="row my-5">
        <div className="col-lg-6">
          <h2>Our Story</h2>
          <p>
          The genesis of [Your Super Calculator Brand Name] stems from a collective ambition to create something extraordinary—a platform that transcends conventional 
          calculators. Founded by a group of industry experts and tech enthusiasts, our journey began with a shared zeal for harnessing technology's power to transform 
          the way calculations are done.
          </p>

          
        </div>

        <div className="col-lg-6">
          <img
            src="././Assets/Images/aboutus.jpg"
            alt="Our Team"
            className="rounded img-fluid about-me-image text-center"
          />
        </div>
      </div> */}

      

      <div className="row my-5 ">
        <div className="col">
          {/* <h2>Passion & Interest</h2> */}
          <div className="row">
            <div className="col-md-8 ">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Information Collection</h5>
                  <p className="card-text">
                  We do not collect or store any personal information or data when you use our calculators. All calculations are performed anonymously, and we do not track or 
                  record any individual user data.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Types of Information</h5>
                  <p className="card-text">
                  While using SuperCalculator, no personally identifiable information such as names, addresses, email addresses, or phone numbers is collected.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Cookies and Tracking</h5>
                  <p className="card-text">
                  We do not use cookies or any tracking mechanisms to gather information about users' browsing activities on our website.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Third-Party Links</h5>
                  <p className="card-text">
                  Our website may contain links to third-party websites. Please note that we have no control over the content or privacy practices of these websites. We encourage you to review the privacy policies of these third-party sites before providing any personal information.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Data Security</h5>
                  <p className="card-text">
                  We prioritize the security of your information. Even though no personal data is collected, we have implemented appropriate technical and organizational measures to safeguard against unauthorized access, alteration, disclosure, or destruction of the anonymous data processed by our calculators.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Updates to Privacy Policy</h5>
                  <p className="card-text">
                  We may update our privacy policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on this page, and we encourage you to review this policy periodically.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-8">
              <div className="card mb-4 border-0">
                <div className="card-body ">
                  <h5 className="card-title">Contact Us</h5>
                  <p className="card-text">
                  If you have any questions, concerns, or require further information about our privacy practices, please contact us through the contact page on our website.
                  </p>
                </div>
              </div>
            </div>

 
          </div>


        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
