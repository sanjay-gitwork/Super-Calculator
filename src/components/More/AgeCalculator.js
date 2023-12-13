import React, { useState } from 'react';

function AgeCalculator() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(0);
  const [error, setError] = useState('');

  const calculateAge = () => {
    if (!birthdate) {
      setError('Birthdate is required');
      return;
    }

    const today = new Date();
    const birthDate = new Date(birthdate);
    const diff = today - birthDate;

    const ageDate = new Date(diff);
    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);

    setAge(calculatedAge);
    setError('');
  };

  const resetFields = () => {
    setBirthdate('');
    setAge(0);
    setError('');
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <h1 className="card-header text-center">Age Calculator</h1>
        <div className="card-body">
          <p>An age calculator is used to determine a person's age based on their birthdate and the current date. It computes the number of years, months, and days between the
             birthdate and the present date, providing an accurate representation of a person's age in different units.</p>
          <form>
            <div className="form-group mt-3">
              <label htmlFor="birthdate"><b>Birthdate:</b></label>
              <input
                type="date"
                className="form-control"
                id="birthdate"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                placeholder="Enter your birthdate"
              />
            </div>
            {error && <p className="text-danger">{error}</p>}
            <div className="row">
              <div className="col-md-6 mt-3">
                <button
                  type="button"
                  className="btn btn-dark btn-block"
                  onClick={calculateAge}
                >
                  Calculate Age
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
          {age > 0 && (
            <div className="mt-3 text-center">
              <h3>Your Age: {age} years</h3>
              <p className="text-muted">
                Birthdate: {birthdate}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AgeCalculator;
