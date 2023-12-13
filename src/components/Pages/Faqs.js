import React from 'react';

const FAQ = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-5">Frequently Asked Questions</h1>
      <div className="accordion " id="faqAccordion">

        {/* FAQ Item 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            1. What is SuperCalculator?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
            SuperCalculator is an all-encompassing platform designed to host a myriad of calculators, catering to various needs—from basic arithmetic to 
            complex financial, fitness, and scientific calculations. It's your go-to destination for accurate, efficient, and user-friendly calculation tools.
            </div>
          </div>
        </div>

         {/* FAQ Item 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            2. What types of calculators are available on SuperCalculator?
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
            Our platform offers a wide array of calculators, including but not limited to basic arithmetic calculators, financial calculators (for loans, mortgages, investments, etc.),
             fitness calculators (BMI, calorie burn, etc.), and scientific calculators (for advanced mathematical computations).
            </div>
          </div>
        </div>

        {/* FAQ Item 3 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            3. Are the calculators on your platform accurate and reliable?
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
            Absolutely. Accuracy and reliability are at the core of our calculators. Each calculator undergoes rigorous testing and is built using precise algorithms 
            to ensure accurate results every time.
            </div>
          </div>
        </div>

                {/* FAQ Item 4 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            4. How user-friendly are the calculators?
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
            We prioritize user experience, and our calculators are designed with simplicity in mind. The interfaces are intuitive, making them easy to use for individuals 
            across various proficiency levels.
            </div>
          </div>
        </div>

                {/* FAQ Item 5 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            5. Can I access the calculators on different devices?
            </button>
          </h2>
          <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
            Yes, SuperCalculator is optimized for accessibility. You can access our calculators seamlessly on desktops, laptops, tablets, and mobile devices, 
            ensuring convenience wherever you are.
            </div>
          </div>
        </div>

                {/* FAQ Item 6 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
            6. Are the calculators free to use?
            </button>
          </h2>
          <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
            Absolutely! Our platform is committed to democratizing access to calculation tools. All the calculators on SuperCalculator 
            are free to use for everyone.
            </div>
          </div>
        </div>

        
                {/* FAQ Item 7 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSeven">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
            7. Can I suggest a new type of calculator to be added to the platform?
            </button>
          </h2>
          <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
            We love feedback and suggestions! Feel free to reach out to us with your ideas for new calculators. We're always looking to expand our offerings to better serve our
             users.
            </div>
          </div>
        </div>

        
                {/* FAQ Item 8 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEight">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
            8. How often are the calculators updated?
            </button>
          </h2>
          <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
            We strive to keep our calculators updated with the latest formulas, algorithms, and trends to ensure relevance and accuracy. Regular updates are part of our 
            commitment to providing the best possible user experience.
            </div>
          </div>
        </div>

        
                {/* FAQ Item 9 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingNine">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
            9. Is my data secure when using the calculators?

            </button>
          </h2>
          <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
            Absolutely. We prioritize user privacy and data security. All calculations performed on SuperCalculator are anonymous and do not collect or store any personal information.
            </div>
          </div>
        </div>

        
                {/* FAQ Item 10 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTen">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
            10. How can I contact support if I have further questions or encounter issues?
            </button>
          </h2>
          <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
            We are always available to assist you. Feel free to reach out to us via the contact page, and we'll be happy to help with any questions, feedback, or concerns you may have.
            </div>
          </div>
        </div>

        {/* Add more FAQ items in a similar structure */}

      </div>
    </div>
  );
};

export default FAQ;
