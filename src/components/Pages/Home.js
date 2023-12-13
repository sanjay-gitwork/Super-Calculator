import React from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FinancialCalculatorHome from '../Home/FinancialCalculatorHome';
import FitnessCalculatorHome from '../Home/FitnessCalculatorHome';
import MathCalculatorHome from '../Home/MathCalculatorHome';
import MoreCalculatorHome from '../Home/MoreCalculatorHome';

const Home = () => {
  return (
    <>
      <FinancialCalculatorHome/>
      <FitnessCalculatorHome/>
      <MathCalculatorHome/>
      <MoreCalculatorHome/>
    </>
    
  );
};

export default Home;
