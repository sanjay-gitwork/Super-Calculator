import React, { useState } from 'react';

function TimePeriodCalculator() {
  const [startDateTime, setStartDateTime] = useState('');
  const [endDateTime, setEndDateTime] = useState('');
  const [timeDifference, setTimeDifference] = useState('');
  const [error, setError] = useState('');

  const calculateTimeDifference = () => {
    if (!startDateTime || !endDateTime) {
      setError('Both start and end date/time are required');
      return;
    }

    const start = new Date(startDateTime);
    const end = new Date(endDateTime);

    if (end < start) {
      setError('End date/time cannot be before the start date/time');
      return;
    }

    const difference = end - start;

    const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    setTimeDifference({ years, months, days, hours, minutes, seconds });
    setError('');
  };

  const resetFields = () => {
    setStartDateTime('');
    setEndDateTime('');
    setTimeDifference({
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
    setError('');
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <h1 className="card-header text-center">Time Period Calculator</h1>
        <div className="card-body">
          <p>Calculate the time difference between two date and time combinations.</p>
          <form>
            <div className="form-group mt-3">
              <label htmlFor="startDateTime"><b>Start Date and Time:</b></label>
              <input
                type="datetime-local"
                className="form-control"
                id="startDateTime"
                value={startDateTime}
                onChange={(e) => setStartDateTime(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="endDateTime"><b>End Date and Time:</b></label>
              <input
                type="datetime-local"
                className="form-control"
                id="endDateTime"
                value={endDateTime}
                onChange={(e) => setEndDateTime(e.target.value)}
              />
            </div>
            {error && <p className="text-danger">{error}</p>}
            <div className="row">
              <div className="col-md-6 mt-3">
                <button
                  type="button"
                  className="btn btn-dark btn-block"
                  onClick={calculateTimeDifference}
                >
                  Calculate Difference
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
          {Object.keys(timeDifference).map((unit, index) => (
            <div key={index} className="mt-3 text-center">
              <h3>{unit.charAt(0).toUpperCase() + unit.slice(1)}: {timeDifference[unit]}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TimePeriodCalculator;
