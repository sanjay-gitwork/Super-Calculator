import './App.css';

import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import FAQ from './components/Pages/Faqs';
import PrivacyPolicy from './components/Pages/PrivacyPolicy';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopNavigation from './components/Navigations/TopNavigation';
import Footer from './components/Navigations/Footer';

import SimpleInterestCalculator from './components/Financial-Calculators/Simple-interest-calculator';
import CompoundInterestCalculator from './components/Financial-Calculators/Compount-Interest-Calculator';
import BMICalculator from './components/Fitness/BMI-Calculator';
import CalorieCounter from './components/Fitness/CalorieCounter';
import BasicCalorieTracker from './components/Fitness/BasicCalorieTracker';
import BloodPressureCalculator from './components/Fitness/BloodPressureCalculator';
import HeartRateCalculator from './components/Fitness/HeartRateCalculator';
import AmortizationScheduleCalculator from './components/Financial-Calculators/AmortizationScheduleCalculator';

import ReturnOnInvestmentCalculator from './components/Financial-Calculators/InvestmentCalculator/ReturnOnInvestmentCalculator';
import FutureValueCalculator from './components/Financial-Calculators/InvestmentCalculator/FutureValueCalculator';
import AgeCalculator from './components/More/AgeCalculator';
import RandomNameGenerator from './components/More/RandomNameGenerator';

import TimeCalculator from './components/More/TimeCalculator';
import RandomNumberGenerator from './components/More/RandomNumberGenerator';
import TimePeriodCalculator from './components/More/TimePeriodCalculator';

// Math Calculators
import PercentageChangeCalculator from './components/Math/PercentageChangeCalculator';
import PercentageCalculator from './components/Math/PercentageCalculator';
import TipCalculator from './components/Math/TipCalculator';
import PercentageDifferenceCalculator from './components/Math/PercentageDifferenceCalculator';
import PercentageDepreciationCalculator from './components/Math/PercentageDepreciationCalculator';



const App = () => {
  return (
  
      <Router>
        <TopNavigation></TopNavigation>
          <Routes>
            <Route exact path ='/' element={<Home/>} />
            <Route path ='/about' element={<About/>} />
            <Route path ='/contact' element={<Contact/>} />
            <Route path ='/privacy-policy' element={<PrivacyPolicy/>} />
            <Route path ='/faq' element={<FAQ/>} />

            <Route path ='/simpleinterest' element={<SimpleInterestCalculator/>} />
            <Route path ='/compoundinterest' element={<CompoundInterestCalculator/>} />
            <Route path ='/bmicalculator' element={<BMICalculator/>} />
            <Route path ='/caloriecounter' element={<CalorieCounter/>} />
            <Route path ='/basiccalorietracker' element={<BasicCalorieTracker/>} />
            <Route path ='/bloodpressure' element={<BloodPressureCalculator/>} />
            <Route path ='/heartrate' element={<HeartRateCalculator/>} />


            <Route path ='/amortizationschedule' element={<AmortizationScheduleCalculator/>} />
            <Route path ='/roicalculator' element={<ReturnOnInvestmentCalculator/>} />
            <Route path ='/futurevalue' element={<FutureValueCalculator/>} />
            <Route path ='/agecalculator' element={<AgeCalculator/>} />
            

            <Route path ='/timecalculator' element={<TimeCalculator/>} />
            <Route path ='/randomnumber' element={<RandomNumberGenerator/>} />
            <Route path ='/timeperiod' element={<TimePeriodCalculator/>} />
            <Route path ='/randomnames' element={<RandomNameGenerator/>} />

          {/* Math  */}
          <Route path ='/percentagechange' element={<PercentageChangeCalculator/>} />  
          <Route path ='/percentagecalculator' element={<PercentageCalculator/>} /> 
          <Route path ='/tipcalculator' element={<TipCalculator/>} /> 
          <Route path ='/percentagedifference' element={<PercentageDifferenceCalculator/>} />  
          <Route path ='/percentagedepreciation' element={<PercentageDepreciationCalculator/>} />       
        
          </Routes>

       <Footer/>
        
     </Router>
 
  );
};

export default App;
