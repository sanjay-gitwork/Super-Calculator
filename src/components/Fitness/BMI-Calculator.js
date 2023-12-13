import React, { useState } from 'react';

function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [heightUnit, setHeightUnit] = useState('cm');
  const [weightUnit, setWeightUnit] = useState('kg');
  const [bmi, setBMI] = useState(0);
  const [bmiCategory, setBMICategory] = useState('');
  const [error, setError] = useState('');

  const convertHeightToCm = (value, unit) => {
    switch (unit) {
      case 'cm':
        return parseFloat(value);
      case 'm':
        return parseFloat(value) * 100;
      case 'ft':
        // Convert feet to centimeters
        return parseFloat(value) * 30.48;
      // Add other unit conversions as needed
      default:
        return parseFloat(value);
    }
  };

  const convertWeightToKg = (value, unit) => {
    switch (unit) {
      case 'kg':
        return parseFloat(value);
      case 'lb':
        // Convert pounds to kilograms
        return parseFloat(value) * 0.453592;
      // Add other unit conversions as needed
      default:
        return parseFloat(value);
    }
  };

  const validateInputs = () => {
    if (!weight || !height) {
      setError('Please enter both weight and height.');
      return false;
    }
    return true;
  };

  const calculateBMI = () => {
    if (validateInputs()) {
        const heightInCm = convertHeightToCm(height, heightUnit);
        const weightInKg = convertWeightToKg(weight, weightUnit);
        const calculatedBMI = weightInKg / ((heightInCm / 100) * (heightInCm / 100));
        
        setBMI(calculatedBMI.toFixed(2));
        determineBMICategory(calculatedBMI);
        setError('');
      }
  };

  const determineBMICategory = (calculatedBMI) => {
    if (calculatedBMI < 18.5) {
      setBMICategory('Underweight');
    } else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) {
      setBMICategory('Normal weight');
    } else if (calculatedBMI >= 25 && calculatedBMI < 29.9) {
      setBMICategory('Overweight');
    } else {
      setBMICategory('Obese');
    }
  };

  const resetFields = () => {
    setWeight('');
    setHeight('');
    setBMI(0);
    setError('');
    setHeightUnit('cm');
    setWeightUnit('kg');
  };

  return (
    <div className="container mt-5 ">
      <div className="card shadow">
        <h1 className="card-header text-center">BMI Calculator</h1>
        <div className="card-body">
          <p>Body Mass Index (BMI) is a measure used to estimate an individual's body fat based on their height and weight. It's a simple method used to categorize
             individuals indicating potential health risks associated with underweight, normal weight, overweight, or obesity.</p>
          <form>
            <div className="form-group mt-3">
              <label htmlFor="weight"><b>Weight:</b></label>
              <input
                type="number"
                className="form-control"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter weight"
              />
              <select
                className="form-control mt-2"
                value={weightUnit}
                onChange={(e) => setWeightUnit(e.target.value)}
              >
                <option value="kg">Kg</option>
                <option value="lb">Pounds</option>
                {/* Add other weight unit options */}
              </select>
            </div>
            <div className="form-group mt-3">
              <label htmlFor="height"><b>Height:</b></label>
              <input
                type="number"
                className="form-control"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Enter height"
              />
              <select
                className="form-control mt-2"
                value={heightUnit}
                onChange={(e) => setHeightUnit(e.target.value)}
              >
                <option value="cm">Centimeters</option>
                <option value="m">Meters</option>
                <option value="ft">Feet</option>
                {/* Add other height unit options */}
              </select>
            </div>
            {error && <p className="text-danger">{error}</p>}
            <div className="row">
              <div className="col-md-6 mt-3 ">
                <button
                  type="button"
                  className="btn btn-dark btn-block"
                  onClick={calculateBMI}
                >
                  Calculate BMI
                </button>
              </div>
              <div className="col-md-6 mt-3">
                <button
                  type="button"
                  className="btn btn-dark btn-block"
                  onClick={resetFields}
                >
                  Reset
                </button>
              </div>
            </div>
          </form>
          {bmi > 0 && (
            <div className="mt-3 text-center">
              <h3>BMI: {bmi}</h3>
              <p className="text-muted">
                Weight: {weight} {weightUnit}, Height: {height} {heightUnit}
              </p>

               <p className="text-info">
                Category: {bmiCategory}
              </p>
            </div>
          )}
        </div>

        
      </div>
    </div>
  );
}

export default BMICalculator;
