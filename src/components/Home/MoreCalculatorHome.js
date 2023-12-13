import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { morecalculators } from './MoreCalculatorData';

const MoreCalculatorHome = () => {
  return (
    <div className="container mt-3">
      <h4 className="mb-3">More Calculators</h4>
      <div className="row">
        {morecalculators.map((morecalculator, index) => (
          <div key={index} className="col-lg col-md mb-4">
            <Link to={morecalculator.link} className="text-decoration-none">
              <div className="card h-100 shadow border-0">
                <div className="card-body">
                  <h4 className="card-title homepage-card-title text-dark">
                    <FontAwesomeIcon icon={morecalculator.icon} className="me-2" />
                    {morecalculator.name}
                  </h4>
                  <p className="card-text">{morecalculator.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreCalculatorHome;
