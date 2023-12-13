import React from "react";
import { Link } from "react-router-dom";
// import './TopNavigation.css';

import 'bootstrap/dist/css/bootstrap.min.css';

// 
const TopNavigation = () => {
    return (
        // <nav className="top-nav">
        //     <ul>
        //         <li><Link to='/'>Home</Link></li>
        //         <li><Link to='/about'>About</Link></li>
        //         <li><Link to='/contact'>Contact</Link></li>
        //         <li><Link to='/projects'>Projects</Link></li>
        //     </ul>
        // </nav>


<nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div className="container">
        <Link className="navbar-brand" to="/">𝓢𝓾𝓹𝓮𝓻𝓒𝓪𝓵𝓬𝓾𝓵𝓪𝓽𝓸𝓻</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {/* <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faq">FAQ</Link>
            </li> */}
            
            {/* Add dropdown */}
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Financial
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/simpleinterest">Simple Interest</Link></li>
                <li><Link className="dropdown-item" to="/compoundinterest">Compount Interest</Link></li>
                <li><Link className="dropdown-item" to="/amortizationschedule">Amortization Schedule</Link></li>
                <li><Link className="dropdown-item" to="/roicalculator">Return on Investment </Link></li>
                <li><Link className="dropdown-item" to="/futurevalue">Future Value Calculator </Link></li>
                {/* Add more dropdown items as needed */}
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Fitness
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/bmicalculator">Body Mass Index (BMI)</Link></li>
                <li><Link className="dropdown-item" to="/calorieCounter">Basic Calorie Counter</Link></li>
                <li><Link className="dropdown-item" to="/BasicCalorieTracker">Basic Calorie Tracker</Link></li>
                <li><Link className="dropdown-item" to="/bloodpressure">Blood Pressure  </Link></li>
                <li><Link className="dropdown-item" to="/heartrate">Heart Rate</Link></li>
                {/* Add more dropdown items as needed */}
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Math
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/percentagecalculator">Percentage Calculator</Link></li>
                <li><Link className="dropdown-item" to="/percentagechange">Percentage Change Calculator</Link></li>
                <li><Link className="dropdown-item" to="/percentagedepreciation">Percentage Depreciation Calculator</Link></li>
                <li><Link className="dropdown-item" to="/percentagedifference">Percentage Difference Calculator</Link></li>
                <li><Link className="dropdown-item" to="/tipcalculator">Tip Calculator</Link></li>
                
                
              </ul>
            </li>


            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                More
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/agecalculator">Age Calculator</Link></li>
                <li><Link className="dropdown-item" to="/timecalculator">Time Calculator</Link></li>
                <li><Link className="dropdown-item" to="/randomnumber">Random Number Generator</Link></li>
                <li><Link className="dropdown-item" to="/timeperiod">Time Period Calculator</Link></li>
                <li><Link className="dropdown-item" to="/randomnames">Random Names Generator</Link></li>
              </ul>
            </li>


            {/* End dropdown */}


             
            
          </ul>
        </div>
      </div>
    </nav>


    );
};

export default TopNavigation;