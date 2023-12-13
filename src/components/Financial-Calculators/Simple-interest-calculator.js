import React, { useState } from 'react';


function SimpleInterestCalculator() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [interest, setInterest] = useState(0);
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

  const calculateInterest = () => {
    if (validateInputs()) {
      const calculatedInterest = (principal * rate * time) / 100;
      setInterest(calculatedInterest.toFixed(2));
      setError('');
    }
  };

  const resetFields = () => {
    setPrincipal('');
    setRate('');
    setTime('');
    setInterest(0);
    setError('');
    setSelectedCurrency('USD');
    setCompoundingFrequency('annually');
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <h1 className="card-header text-center">Simple Interest Calculator</h1>
        <div className="card-body">
            <p>Simple interest is calculated on the original principal amount for a specific period, usually expressed as a percentage of the principal amount. 
                It's called "simple" because it's calculated only on the initial principal, without considering any additional charges or changes to the principal 
                during the time period.</p>
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
              <div className="col-md-6 mt-3 ">
                <button
                  type="button"
                  className="btn btn-dark btn-block"
                  onClick={calculateInterest}
                >
                  Calculate Interest
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
          {interest > 0 && (
            <div className="mt-3 text-center">
              <h3>Interest: {selectedCurrency} {interest}</h3>
              <p className="text-muted">
                <b>Details: Principal: {selectedCurrency} {principal}, Rate: {rate}%, Time: {time} years </b>
              </p>
              <p className="text-muted">
                <b>Total Amount: {selectedCurrency} {parseFloat(principal) + parseFloat(interest)}</b>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SimpleInterestCalculator;
