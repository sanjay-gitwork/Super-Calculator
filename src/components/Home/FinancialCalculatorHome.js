import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { calculators } from './FinancialCalculatorData';

const FinancialCalculatorHome = () => {
  return (
    <div className="container mt-5">
      <h4 className="mb-3">Financial Calculators</h4>
      <div className="row">
        {calculators.map((calculator, index) => (
          <div key={index} className="col-lg col-md mb-4">
            <Link to={calculator.link} className="text-decoration-none">
              <div className="card h-100 shadow border-0">
                <div className="card-body">
                  <h4 className="card-title homepage-card-title text-dark">
                    <FontAwesomeIcon icon={calculator.icon} className="me-2" />
                    {calculator.name}
                  </h4>
                  <p className="card-text">{calculator.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinancialCalculatorHome;
