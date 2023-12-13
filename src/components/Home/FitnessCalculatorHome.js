import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fitnesscalculators } from './FitnessCalculatorData';

const FitnessCalculatorHome = () => {
  return (
    <div className="container mt-3">
      <h4 className="mb-3">Fitness Calculators</h4>
      <div className="row">
        {fitnesscalculators.map((fitnesscalculator, index) => (
          <div key={index} className="col-lg col-md mb-4">
            <Link to={fitnesscalculator.link} className="text-decoration-none">
              <div className="card h-100 shadow border-0">
                <div className="card-body">
                  <h4 className="card-title homepage-card-title text-dark">
                    <FontAwesomeIcon icon={fitnesscalculator.icon} className="me-2" />
                    {fitnesscalculator.name}
                  </h4>
                  <p className="card-text">{fitnesscalculator.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FitnessCalculatorHome;
