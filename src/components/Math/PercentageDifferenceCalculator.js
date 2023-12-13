import React, { useState } from 'react';

function PercentageDifferenceCalculator() {
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const [percentageDifference, setPercentageDifference] = useState('');
  const [changeDirection, setChangeDirection] = useState('');
  const [error, setError] = useState('');
  const [roundingOption, setRoundingOption] = useState('none');

  const calculatePercentageDifference = () => {
    if (!firstValue || !secondValue) {
      setError('Both values are required');
      return;
    }

    const parsedFirstValue = parseFloat(firstValue);
    const parsedSecondValue = parseFloat(secondValue);

    if (isNaN(parsedFirstValue) || isNaN(parsedSecondValue)) {
      setError('Please enter valid numbers for both values');
      return;
    }

    const difference = parsedSecondValue - parsedFirstValue;
    const percentage = (Math.abs(difference) / Math.max(parsedFirstValue, parsedSecondValue)) * 100;

    setPercentageDifference(percentage.toFixed(2));

    if (difference > 0) {
      setChangeDirection('increase');
    } else if (difference < 0) {
      setChangeDirection('decrease');
    } else {
      setChangeDirection('no change');
    }

    setError('');
  };

  const resetFields = () => {
    setFirstValue('');
    setSecondValue('');
    setPercentageDifference('');
    setChangeDirection('');
    setError('');
    setRoundingOption('none');
  };

  const getChangeColor = () => {
    if (changeDirection === 'increase') {
      return 'text-success'; // Green for increase
    } else if (changeDirection === 'decrease') {
      return 'text-danger'; // Red for decrease
    }
    return ''; // No specific color if no change
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <h1 className="card-header text-center">Percentage Difference Calculator</h1>
        <div className="card-body">
          <p>Percentage difference is a measure used to quantify the relative change between two values or quantities expressed as a percentage of one of the values. 
            It helps assess the difference between two quantities in terms of their proportion relative to one of the quantities.</p>
          <form>
            <div className="form-group mt-3">
              <label htmlFor="firstValue"><b>First Value:</b></label>
              <input
                type="number"
                className="form-control"
                id="firstValue"
                value={firstValue}
                onChange={(e) => setFirstValue(e.target.value)}
                placeholder="Enter first value"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="secondValue"><b>Second Value:</b></label>
              <input
                type="number"
                className="form-control"
                id="secondValue"
                value={secondValue}
                onChange={(e) => setSecondValue(e.target.value)}
                placeholder="Enter second value"
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
                  onClick={calculatePercentageDifference}
                >
                  Calculate Percentage Difference
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
          {percentageDifference !== '' && (
            <div className="mt-3 text-center">
              <h3 className={getChangeColor()}>
                Percentage Difference: {percentageDifference}%
              </h3>
              <p className="text-muted">
                <b>First Value: {firstValue}, Second Value: {secondValue}</b>
              </p>
              <p className="text-muted">
                <b>Change Direction: {changeDirection}</b>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PercentageDifferenceCalculator;
