import React, { useState } from 'react';

function PercentageDepreciationCalculator() {
  const [initialValue, setInitialValue] = useState('');
  const [finalValue, setFinalValue] = useState('');
  const [percentageDepreciation, setPercentageDepreciation] = useState('');
  const [depreciationExplanation, setDepreciationExplanation] = useState('');
  const [lossOrGain, setLossOrGain] = useState('');
  const [error, setError] = useState('');
  const [precision, setPrecision] = useState(2);

  const calculatePercentageDepreciation = () => {
    if (!initialValue || !finalValue) {
      setError('Both initial and final values are required');
      return;
    }

    const parsedInitialValue = parseFloat(initialValue);
    const parsedFinalValue = parseFloat(finalValue);

    if (isNaN(parsedInitialValue) || isNaN(parsedFinalValue)) {
      setError('Please enter valid numbers for both values');
      return;
    }

    const difference = parsedInitialValue - parsedFinalValue;
    const percentage = (difference / parsedInitialValue) * 100;

    setPercentageDepreciation(percentage.toFixed(precision));

    if (difference > 0) {
      setDepreciationExplanation(`The value decreased by ${percentage.toFixed(precision)}%`);
      setLossOrGain('Loss');
    } else if (difference < 0) {
      setDepreciationExplanation(`The value increased by ${Math.abs(percentage).toFixed(precision)}%`);
      setLossOrGain('Gain');
    } else {
      setDepreciationExplanation('There is no change in value');
      setLossOrGain('No change');
    }

    setError('');
  };

  const resetFields = () => {
    setInitialValue('');
    setFinalValue('');
    setPercentageDepreciation('');
    setDepreciationExplanation('');
    setLossOrGain('');
    setError('');
    setPrecision(2);
  };

  const getColorBasedOnDepreciation = () => {
    if (lossOrGain === 'Loss') {
      return 'text-danger'; // Red for depreciation
    } else if (lossOrGain === 'Gain') {
      return 'text-success'; // Green for appreciation
    }
    return ''; // No specific color if no change
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <h1 className="card-header text-center">Percentage Depreciation Calculator</h1>
        <div className="card-body">
          <p>Percentage depreciation is a measure that quantifies the decrease in the value of an asset or investment over a specific period, expressed as a percentage of its
             original value. It is used to assess the reduction in the worth of an asset due to factors like wear and tear, obsolescence, or market conditions.</p>
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
            <div className="form-group mt-3">
              <label htmlFor="precision"><b>Precision:</b></label>
              <input
                type="number"
                className="form-control"
                id="precision"
                value={precision}
                onChange={(e) => setPrecision(e.target.value)}
                placeholder="Enter precision"
              />
            </div>
            {error && <p className="text-danger">{error}</p>}
            <div className="row">
              <div className="col-md-6 mt-3">
                <button
                  type="button"
                  className="btn btn-dark btn-block"
                  onClick={calculatePercentageDepreciation}
                >
                  Calculate Depreciation
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
          {percentageDepreciation !== '' && (
            <div className="mt-3 text-center">
              <h3 className={getColorBasedOnDepreciation()}>
                Percentage Depreciation: {percentageDepreciation}%
              </h3>
              <p className="text-muted">
                <b>Initial Value: {initialValue}, Final Value: {finalValue}</b>
              </p>
              <p className="text-muted">
                {depreciationExplanation}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PercentageDepreciationCalculator;
