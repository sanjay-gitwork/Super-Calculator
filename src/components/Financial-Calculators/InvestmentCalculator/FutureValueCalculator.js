import React, { useState } from 'react';

function FutureValueCalculator() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [futureValue, setFutureValue] = useState(0);
  const [error, setError] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [compoundingFrequency, setCompoundingFrequency] = useState('annually');

  const validateInputs = () => {
    if (!principal || !rate || !time) {
      setError('All fields are required');
      return false;
    }
    return true;
  };

  const calculateFutureValue = () => {
    if (validateInputs()) {
      const principalValue = parseFloat(principal);
      const rateValue = parseFloat(rate) / 100;
      const timeValue = parseFloat(time);
      let compoundFrequency = 1;

      if (compoundingFrequency === 'semi-annually') {
        compoundFrequency = 2;
      } else if (compoundingFrequency === 'quarterly') {
        compoundFrequency = 4;
      } else if (compoundingFrequency === 'monthly') {
        compoundFrequency = 12;
      }

      const periods = compoundFrequency * timeValue;
      const calculatedFutureValue = principalValue * Math.pow(1 + rateValue / compoundFrequency, periods);
      
      setFutureValue(calculatedFutureValue.toFixed(2));
      setError('');
    }
  };

  const resetFields = () => {
    setPrincipal('');
    setRate('');
    setTime('');
    setFutureValue(0);
    setError('');
    setSelectedCurrency('USD');
    setCompoundingFrequency('annually');
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <h1 className="card-header text-center">Future Value Calculator</h1>
        <div className="card-body">
          <p>Future Value (FV) is a financial concept that represents the value of an investment or a sum of money at a specific date in the future, based on a certain interest
             rate or rate of return. It's a critical calculation helping individuals or businesses understand the potential growth of an investment over time.</p>
          <form>
            <div className="form-group mt-3">
              <label htmlFor="principal"><b>Principal Amount:</b></label>
              <input
                type="number"
                className="form-control"
                id="principal"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                placeholder="Enter principal amount"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="rate"><b>Rate of Interest (%):</b></label>
              <input
                type="number"
                className="form-control"
                id="rate"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                placeholder="Enter rate of interest"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="time"><b>Time Period (years):</b></label>
              <input
                type="number"
                className="form-control"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="Enter time period"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="currency"><b>Select Currency:</b></label>
              <select
                className="form-control"
                id="currency"
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="INR">INR</option>
                {/* Add more currency options as needed */}
              </select>
            </div>
            <div className="form-group mt-3">
              <label htmlFor="frequency"><b>Interest Compounding Frequency:</b></label>
              <select
                className="form-control"
                id="frequency"
                value={compoundingFrequency}
                onChange={(e) => setCompoundingFrequency(e.target.value)}
              >
                <option value="annually">Annually</option>
                <option value="semi-annually">Semi-annually</option>
                <option value="quarterly">Quarterly</option>
                <option value="monthly">Monthly</option>
                {/* Add more frequency options as needed */}
              </select>
            </div>
            {error && <p className="text-danger">{error}</p>}
            <div className="row">
              <div className="col-md-6 mt-3">
                <button
                  type="button"
                  className="btn btn-dark btn-block"
                  onClick={calculateFutureValue}
                >
                  Calculate Future Value
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
          {futureValue > 0 && (
            <div className="mt-3 text-center">
              <h3>Future Value: {selectedCurrency} {futureValue}</h3>
              <p className="text-muted">
                Details: Principal: {selectedCurrency} {principal}, Rate: {rate}%, Time: {time} years
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FutureValueCalculator;
