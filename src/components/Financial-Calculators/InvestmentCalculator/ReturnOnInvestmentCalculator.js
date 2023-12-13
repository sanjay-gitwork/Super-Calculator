import React, { useState } from 'react';

function ReturnOnInvestmentCalculator() {
  const [initialInvestment, setInitialInvestment] = useState('');
  const [finalValue, setFinalValue] = useState('');
  const [roi, setROI] = useState(0);
  const [error, setError] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const validateInputs = () => {
    if (!initialInvestment || !finalValue) {
      setError('All fields are required');
      return false;
    }
    return true;
  };

  const calculateROI = () => {
    if (validateInputs()) {
      const initialInvestmentValue = parseFloat(initialInvestment);
      const finalValueAmount = parseFloat(finalValue);

      const roiValue = ((finalValueAmount - initialInvestmentValue) / initialInvestmentValue) * 100;

      setROI(roiValue.toFixed(2));
      setError('');
    }
  };

  const resetFields = () => {
    setInitialInvestment('');
    setFinalValue('');
    setROI(0);
    setError('');
    setSelectedCurrency('USD');
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <h1 className="card-header text-center">Return On Investment Calculator</h1>
        <div className="card-body">
          <p>Return on Investment (ROI) is a financial metric used to evaluate the profitability of an investment relative to its cost. It's a measure that helps assess the
             efficiency or success of an investment by comparing the gain or loss generated from it against the initial investment cost.</p>
          <form>
            <div className="form-group mt-3">
              <label htmlFor="initialInvestment"><b>Initial Investment:</b></label>
              <input
                type="number"
                className="form-control"
                id="initialInvestment"
                value={initialInvestment}
                onChange={(e) => setInitialInvestment(e.target.value)}
                placeholder="Enter initial investment amount"
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
            {error && <p className="text-danger">{error}</p>}
            <div className="row">
              <div className="col-md-6 mt-3">
                <button
                  type="button"
                  className="btn btn-dark btn-block"
                  onClick={calculateROI}
                >
                  Calculate ROI
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
          <div className="mt-3 text-center">
            <h3>ROI: {roi}%</h3>
            {roi !== 0 && (
              <p className="text-muted">
                {roi > 0 ? 'Positive ROI' : 'Negative ROI'}: {selectedCurrency} {Math.abs(finalValue - initialInvestment)}
              </p>
            )}
            {roi > 0 && (
              <p className="text-muted">
                Initial Investment: {selectedCurrency} {initialInvestment}, Final Value: {selectedCurrency} {finalValue}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReturnOnInvestmentCalculator;
