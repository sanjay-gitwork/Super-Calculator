import React, { useState } from 'react';

function TipCalculator() {
  const [billAmount, setBillAmount] = useState('');
  const [tipPercentage, setTipPercentage] = useState('');
  const [tipAmount, setTipAmount] = useState('');
  const [totalBill, setTotalBill] = useState('');
  const [error, setError] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const calculateTip = () => {
    if (!billAmount || !tipPercentage) {
      setError('Both bill amount and tip percentage are required');
      return;
    }

    const parsedBillAmount = parseFloat(billAmount);
    const parsedTipPercentage = parseFloat(tipPercentage);

    if (isNaN(parsedBillAmount) || isNaN(parsedTipPercentage)) {
      setError('Please enter valid numbers for bill amount and tip percentage');
      return;
    }

    const calculatedTip = (parsedBillAmount * parsedTipPercentage) / 100;
    const calculatedTotalBill = parsedBillAmount + calculatedTip;

    setTipAmount(calculatedTip.toFixed(2));
    setTotalBill(calculatedTotalBill.toFixed(2));
    setError('');
  };

  const resetFields = () => {
    setBillAmount('');
    setTipPercentage('');
    setTipAmount('');
    setTotalBill('');
    setError('');
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <h1 className="card-header text-center">Tip Calculator</h1>
        <div className="card-body">
          <p>A tip calculator is a tool used to calculate the amount of tip, based on a percentage of the total bill. It simplifies the process of determining how much to 
            tip based on different percentages and allows for easy splitting of the total bill among multiple people.</p>
          <form>
            <div className="form-group mt-3">
              <label htmlFor="billAmount"><b>Bill Amount:</b></label>
              <input
                type="number"
                className="form-control"
                id="billAmount"
                value={billAmount}
                onChange={(e) => setBillAmount(e.target.value)}
                placeholder="Enter bill amount"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="tipPercentage"><b>Tip Percentage:</b></label>
              <input
                type="number"
                className="form-control"
                id="tipPercentage"
                value={tipPercentage}
                onChange={(e) => setTipPercentage(e.target.value)}
                placeholder="Enter tip percentage"
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
                {/* Add more currency options as needed */}
              </select>
            </div>
            {error && <p className="text-danger">{error}</p>}
            <div className="row">
              <div className="col-md-6 mt-3">
                <button
                  type="button"
                  className="btn btn-dark btn-block"
                  onClick={calculateTip}
                >
                  Calculate Tip
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
          {tipAmount !== '' && totalBill !== '' && (
            <div className="mt-3 text-center">
              <h3>Tip Amount: {selectedCurrency} {tipAmount}</h3>
              <h3>Total Bill: {selectedCurrency} {totalBill}</h3>
              <p className="text-muted">
                <b>Bill Amount: {billAmount}, Tip Percentage: {tipPercentage}%</b>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TipCalculator;
