import React, { useState } from 'react';

function PercentageChangeCalculator() {
  const [initialValue, setInitialValue] = useState('');
  const [finalValue, setFinalValue] = useState('');
  const [percentageChange, setPercentageChange] = useState(0);
  const [changeDirection, setChangeDirection] = useState('');
  const [error, setError] = useState('');

  const validateInputs = () => {
    if (!initialValue || !finalValue) {
      setError('Both initial and final values are required');
      return false;
    }
    return true;
  };

  const calculatePercentageChange = () => {
    if (validateInputs()) {
      const change = finalValue - initialValue;
      const percentage = (change / initialValue) * 100;
      setPercentageChange(percentage.toFixed(2));

      if (percentage > 0) {
        setChangeDirection('increase');
      } else if (percentage < 0) {
        setChangeDirection('decrease');
      } else {
        setChangeDirection('no change');
      }

      setError('');
    }
  };

  const resetFields = () => {
    setInitialValue('');
    setFinalValue('');
    setPercentageChange(0);
    setChangeDirection('');
    setError('');
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
        <h1 className="card-header text-center">Percentage Change Calculator</h1>
        <div className="card-body">
          <p>Percentage change is a measure used to express the difference between two values as a percentage of the initial or original value. It's commonly used in various
             fields and everyday contexts to analyze changes in quantities over time.</p>
          <form>
            <div className="form-group mt-3">
              <label htmlFor="initialValue"><b>Initial Value:</b></label>
              <input
                type="number"
                className="form-control"
                id="initialValue"
                value={initialValue}
                onChange={(e) => setInitialValue(e.target.value)}
                placeholder="Enter initial value"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="finalValue"><b>Final Value:</b></label>
              <input
                type="number"
                className="form-control"
                id="finalValue"
                value={finalValue}
                onChange={(e) => setFinalValue(e.target.value)}
                placeholder="Enter final value"
              />
            </div>
            {error && <p className="text-danger">{error}</p>}
            <div className="row">
              <div className="col-md-6 mt-3">
                <button
                  type="button"
                  className="btn btn-dark btn-block"
                  onClick={calculatePercentageChange}
                >
                  Calculate Percentage Change
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
          {percentageChange !== 0 && (
            <div className="mt-3 text-center">
              <h3 className={getChangeColor()}>Percentage Change: {percentageChange}%</h3>
              <p className="text-muted">
                <b>Change Direction: {changeDirection}</b>
              </p>
              <p className="text-muted">
                <b>Details: Initial Value: {initialValue}, Final Value: {finalValue}</b>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PercentageChangeCalculator;
