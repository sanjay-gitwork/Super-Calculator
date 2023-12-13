import React from 'react';

const About = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <h1 className="text-center">About Us</h1>
          <p className="text-center">At SuperCalculator, we're more than just developers—we're creators on a mission to simplify complexities through 
          ingenious calculations. Fuelled by a passion for innovation, we've embarked on a journey to redefine the way the world computes.</p>
          <hr />
        </div>
      </div>
      <div className="row my-5">
        <div className="col-lg-6">
          <h2>Our Story</h2>
          <p>
          The genesis of SuperCalculator stems from a collective ambition to create something extraordinary—a platform that transcends conventional 
          calculators. Founded by a group of industry experts and tech enthusiasts, our journey began with a shared zeal for harnessing technology's power to transform 
          the way calculations are done.
          </p>

          <div className="col-lg-12 mt-5">
          <h2>Our Mission</h2>
          <p>
          Our raison d'être is simple yet profound: to empower individuals, businesses, and professionals with an extensive suite of calculators that cater to diverse needs. 
          We're committed to democratizing access to accurate and efficient calculation tools, eliminating barriers, and fostering a culture of computational empowerment.
          </p>
          
        </div>
          
        </div>

        <div className="col-lg-6">
          <img
            src="././Assets/Images/aboutus.jpg"
            alt="Our Team"
            className="rounded img-fluid about-me-image text-center"
          />
        </div>
      </div>

      

      <div className="row my-5">
        <div className="col">
          {/* <h2>Passion & Interest</h2> */}
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">What We Offer</h5>
                  <p className="card-text">
                  From fundamental arithmetic to intricate financial analysis, from health and fitness metrics to scientific calculations — SuperCalculator, your one-stop destination for an extensive spectrum of calculators meticulously crafted to elevate your computational experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Our Philosophy</h5>
                  <p className="card-text">
                  Simplicity and sophistication converge at SuperCalculator. We firmly believe that the most powerful tools are those that are easy to use. Therefore, our focus remains steadfast on creating intuitive interfaces and user-friendly experiences without compromising on accuracy or functionality.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Our Commitment to Excellence</h5>
                  <p className="card-text">
                  What distinguishes us is our unwavering dedication to perfection. Each line of code, each feature embedded within SuperCalculator
                  reflects our commitment to precision, reliability, and cutting-edge technology. We meticulously test and refine our calculators to ensure they deliver unparalleled
                   accuracy and efficiency.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Why Choose Us</h5>
                  <p className="card-text">
                  When you choose [Calculator Name], you're not just accessing calculators; you're gaining a trusted partner in computation. Our platform stands tall on a foundation of user-centric design, robustness, and a relentless pursuit of excellence. We're here to make your calculations not just manageable but enjoyable.
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

export default About;
