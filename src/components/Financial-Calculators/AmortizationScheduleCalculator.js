import React, { useState } from 'react';

function AmortizationScheduleCalculator() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [error, setError] = useState('');
  const [amortizationSchedule, setAmortizationSchedule] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const validateInputs = () => {
    if (!principal || !rate || !time) {
      setError('All fields are required');
      return false;
    }
    return true;
  };

  const calculateAmortizationSchedule = () => {
    if (validateInputs()) {
      const principalValue = parseFloat(principal);
      const rateValue = parseFloat(rate) / 100 / 12; // Monthly interest rate
      const timeValue = parseFloat(time) * 12; // Total months
      
      const monthlyPaymentValue =
        (principalValue * rateValue) /
        (1 - Math.pow(1 + rateValue, -timeValue));
      setMonthlyPayment(monthlyPaymentValue.toFixed(2));

      let remainingPrincipal = principalValue;
      let totalInterestPaid = 0;
      let totalPaid = 0;
      const schedule = [];

      for (let i = 1; i <= timeValue; i++) {
        const interestPayment = remainingPrincipal * rateValue;
        const principalPayment = monthlyPaymentValue - interestPayment;
        remainingPrincipal -= principalPayment;
        totalInterestPaid += interestPayment;
        totalPaid += monthlyPaymentValue;

        schedule.push({
          month: i,
          principalPayment: principalPayment.toFixed(2),
          interestPayment: interestPayment.toFixed(2),
          remainingPrincipal: remainingPrincipal.toFixed(2),
        });
      }

      setTotalAmount(totalPaid.toFixed(2));
      setTotalInterest(totalInterestPaid.toFixed(2));
      setAmortizationSchedule(schedule);
      setError('');
    }
  };

  const resetFields = () => {
    setPrincipal('');
    setRate('');
    setTime('');
    setMonthlyPayment(0);
    setTotalAmount(0);
    setTotalInterest(0);
    setError('');
    setAmortizationSchedule([]);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <h1 className="card-header text-center">Amortization Schedule Calculator</h1>
        <div className="card-body">
            <p> An amortization schedule calculator is a financial tool used to calculate and display a detailed payment schedule for a loan, typically a mortgage or
                other types of loans with fixed repayment schedules. This schedule outlines how each payment is divided between principal and interest over the life of 
                the loan.</p>
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
            {error && <p className="text-danger">{error}</p>}
            <div className="row">
              <div className="col-md-6 mt-3">
                <button
                  type="button"
                  className="btn btn-dark btn-block"
                  onClick={calculateAmortizationSchedule}
                >
                  Calculate Schedule
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
          {monthlyPayment > 0 && (
            <div className="mt-3 text-center">
              <h3>Monthly Payment: {selectedCurrency} {monthlyPayment}</h3>
              <h4>Total Amount Paid: {selectedCurrency} {totalAmount}</h4>
              <h4>Total Interest Paid: {selectedCurrency} {totalInterest}</h4>
              <table className="table mt-3">
                <thead>
                  <tr>
                    <th>Month</th>
                    <th>Principal Payment</th>
                    <th>Interest Payment</th>
                    <th>Remaining Principal</th>
                  </tr>
                </thead>
                <tbody>
                  {amortizationSchedule.map((entry) => (
                    <tr key={entry.month}>
                      <td>{entry.month}</td>
                      <td>{selectedCurrency} {entry.principalPayment}</td>
                      <td>{selectedCurrency} {entry.interestPayment}</td>
                      <td>{selectedCurrency} {entry.remainingPrincipal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AmortizationScheduleCalculator;