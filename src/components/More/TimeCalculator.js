import React, { useState } from 'react';

function TimeCalculator() {
  const [dateTime, setDateTime] = useState('');
  const [timeToAdd, setTimeToAdd] = useState('');
  const [resultDateTime, setResultDateTime] = useState('');
  const [error, setError] = useState('');

  const calculateTime = () => {
    if (!dateTime || !timeToAdd) {
      setError('Both date/time and time to add are required');
      return;
    }

    const originalDate = new Date(dateTime);
    const timeArray = timeToAdd.split(':');
    const hoursToAdd = parseInt(timeArray[0], 10);
    const minutesToAdd = parseInt(timeArray[1], 10);

    if (isNaN(hoursToAdd) || isNaN(minutesToAdd)) {
      setError('Invalid time format. Use HH:MM');
      return;
    }

    const resultDate = new Date(originalDate);
    resultDate.setHours(resultDate.getHours() + hoursToAdd);
    resultDate.setMinutes(resultDate.getMinutes() + minutesToAdd);

    setResultDateTime(resultDate.toString());
    setError('');
  };

  const resetFields = () => {
    setDateTime('');
    setTimeToAdd('');
    setResultDateTime('');
    setError('');
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <h1 className="card-header text-center">Time Calculator</h1>
        <div className="card-body">
          <p>Add or subtract time from a specific date and time.</p>
          <form>
            <div className="form-group mt-3">
              <label htmlFor="dateTime"><b>Date and Time:</b></label>
              <input
                type="datetime-local"
                className="form-control"
                id="dateTime"
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="timeToAdd"><b>Time to Add (HH:MM):</b></label>
              <input
                type="text"
                className="form-control"
                id="timeToAdd"
                value={timeToAdd}
                onChange={(e) => setTimeToAdd(e.target.value)}
                placeholder="Enter time to add/subtract (HH:MM)"
              />
            </div>
            {error && <p className="text-danger">{error}</p>}
            <div className="row">
              <div className="col-md-6 mt-3">
                <button
                  type="button"
                  className="btn btn-dark btn-block"
                  onClick={calculateTime}
                >
                  Calculate Time
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
          {resultDateTime && (
            <div className="mt-3 text-center">
              <h3>Resulting Date and Time:</h3>
              <p className="text-muted">
                {resultDateTime}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TimeCalculator;
