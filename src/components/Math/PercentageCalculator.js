import React, { useState } from 'react';

function PercentageCalculator() {
  const [value, setValue] = useState('');
  const [percentage, setPercentage] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [roundingOption, setRoundingOption] = useState('none');

  const calculatePercentage = () => {
    if (!value || !percentage) {
      setError('Both value and percentage are required');
      return;
    }

    const parsedValue = parseFloat(value);
    const parsedPercentage = parseFloat(percentage);

    if (isNaN(parsedValue) || isNaN(parsedPercentage)) {
      setError('Please enter valid numbers for value and percentage');
      return;
    }

    let calculatedResult = (parsedValue * parsedPercentage) / 100;

    if (roundingOption === 'none') {
      calculatedResult = calculatedResult.toFixed(2);
    } else if (roundingOption === 'ceil') {
      calculatedResult = Math.ceil(calculatedResult * 100) / 100;
    } else if (roundingOption === 'floor') {
      calculatedResult = Math.floor(calculatedResult * 100) / 100;
    }

    setResult(calculatedResult.toString());
    setError('');
  };

  const resetFields = () => {
    setValue('');
    setPercentage('');
    setResult('');
    setError('');
    setRoundingOption('none');
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <h1 className="card-header text-center">Percentage Calculator</h1>
        <div className="card-body">
          <p>A percentage calculator computes the percentage of a value relative to another value. It allows users to determine what percentage one number
             represents of another. This calculator simplifies the process of finding percentages by performing the necessary mathematical operations automatically.</p>
          <form>
            <div className="form-group mt-3">
              <label htmlFor="value"><b>Value:</b></label>
              <input
                type="number"
                className="form-control"
                id="value"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Enter value"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="percentage"><b>Percentage:</b></label>
              <input
                type="number"
                className="form-control"
                id="percentage"
                value={percentage}
                onChange={(e) => setPercentage(e.target.value)}
                placeholder="Enter percentage"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="roundingOption"><b>Rounding Option:</b></label>
              <select
                className="form-control"
                id="roundingOption"
                value={roundingOption}
                onChange={(e) => setRoundingOption(e.target.value)}
              >
                <option value="none">No rounding</option>
                <option value="ceil">Ceiling</option>
                <option value="floor">Floor</option>
              </select>
            </div>
            {error && <p className="text-danger">{error}</p>}
            <div className="row">
              <div className="col-md-6 mt-3">
                <button
                  type="button"
                  className="btn btn-dark btn-block"
                  onClick={calculatePercentage}
                >
                  Calculate Percentage
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
          {result !== '' && (
            <div className="mt-3 text-center">
              <h3>Result: {result}</h3>
              <p className="text-muted">
                <b>Value: {value}, Percentage: {percentage}%</b>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PercentageCalculator;
