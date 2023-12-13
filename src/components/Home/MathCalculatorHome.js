import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mathcalculators } from './MathCalculatorData';

const MathCalculatorHome = () => {
  return (
    <div className="container mt-3">
      <h4 className="mb-3">Math Calculators</h4>
      <div className="row">
        {mathcalculators.map((mathcalculator, index) => (
          <div key={index} className="col-lg col-md mb-4">
            <Link to={mathcalculator.link} className="text-decoration-none">
              <div className="card h-100 shadow border-0">
                <div className="card-body">
                  <h4 className="card-title homepage-card-title text-dark">
                    <FontAwesomeIcon icon={mathcalculator.icon} className="me-2" />
                    {mathcalculator.name}
                  </h4>
                  <p className="card-text">{mathcalculator.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MathCalculatorHome;
