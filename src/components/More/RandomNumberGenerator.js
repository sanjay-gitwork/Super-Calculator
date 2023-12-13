import React, { useState } from 'react';

function RandomNumberGenerator() {
  const [minRange, setMinRange] = useState(0);
  const [maxRange, setMaxRange] = useState(100);
  const [totalDigits, setTotalDigits] = useState(1);
  const [generateUnique, setGenerateUnique] = useState(false);
  const [totalNumbers, setTotalNumbers] = useState(1);
  const [randomNumbers, setRandomNumbers] = useState([]);
  const [error, setError] = useState('');

  const generateRandomNumbers = () => {
    if (totalDigits <= 0 || totalNumbers <= 0 || minRange >= maxRange) {
      setError('Invalid input');
      return;
    }

    const numbersSet = new Set();
    const generatedNumbers = [];

    while (generatedNumbers.length < totalNumbers) {
      const min = Math.pow(10, totalDigits - 1);
      const max = Math.pow(10, totalDigits) - 1;

      const generatedNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      const finalNumber = minRange + generatedNumber % (maxRange - minRange + 1);

      if (generateUnique) {
        if (!numbersSet.has(finalNumber)) {
          generatedNumbers.push(finalNumber);
          numbersSet.add(finalNumber);
        }
      } else {
        generatedNumbers.push(finalNumber);
      }
    }

    setRandomNumbers(generatedNumbers);
    setError('');
  };

  const resetFields = () => {
    setMinRange(0);
    setMaxRange(100);
    setTotalDigits(1);
    setGenerateUnique(false);
    setTotalNumbers(1);
    setRandomNumbers([]);
    setError('');
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <h1 className="card-header text-center">Random Number Generator</h1>
        <div className="card-body">
          <p>A random number generator (RNG) is used to produce a sequence of numbers or values that lack any discernible pattern and appear to be random. </p>
          <form>
            <div className="form-group mt-3">
              <label htmlFor="minRange"><b>Minimum Range:</b></label>
              <input
                type="number"
                className="form-control"
                id="minRange"
                value={minRange}
                onChange={(e) => setMinRange(parseInt(e.target.value))}
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="maxRange"><b>Maximum Range:</b></label>
              <input
                type="number"
                className="form-control"
                id="maxRange"
                value={maxRange}
                onChange={(e) => setMaxRange(parseInt(e.target.value))}
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="totalDigits"><b>Total Digits:</b></label>
              <input
                type="number"
                className="form-control"
                id="totalDigits"
                value={totalDigits}
                onChange={(e) => setTotalDigits(parseInt(e.target.value))}
              />
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="uniqueNumbers"
                checked={generateUnique}
                onChange={() => setGenerateUnique(!generateUnique)}
              />
              <label className="form-check-label" htmlFor="uniqueNumbers">Generate Unique Numbers</label>
            </div>
            <div className="form-group mt-3">
              <label htmlFor="totalNumbers"><b>Total Numbers:</b></label>
              <input
                type="number"
                className="form-control"
                id="totalNumbers"
                value={totalNumbers}
                onChange={(e) => setTotalNumbers(parseInt(e.target.value))}
              />
            </div>
            <div className="row">
              <div className="col-md-6 mt-3">
                <button
                  type="button"
                  className="btn btn-dark btn-block"
                  onClick={generateRandomNumbers}
                >
                  Generate Numbers
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
          {randomNumbers.length > 0 && (
            <div className="mt-3 text-center">
              <h3>Generated Random Numbers:</h3>
              <ul className="list-unstyled">
                {randomNumbers.map((number, index) => (
                  <li key={index} className="text-muted">{number}</li>
                ))}
              </ul>
            </div>
          )}
          {error && <p className="text-danger mt-3">{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default RandomNumberGenerator;
