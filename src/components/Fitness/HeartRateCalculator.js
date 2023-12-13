import React, { useState } from 'react';

function HeartRateCalculator() {
  const [numberOfBeats, setNumberOfBeats] = useState('');
  const [timeInSeconds, setTimeInSeconds] = useState('');
  const [heartRate, setHeartRate] = useState(0);
  const [error, setError] = useState('');

  const validateInputs = () => {
    if (!numberOfBeats || !timeInSeconds || numberOfBeats <= 0 || timeInSeconds <= 0) {
      setError('Please enter valid values for beats and time');
      return false;
    }
    return true;
  };

  const calculateHeartRate = () => {
    if (validateInputs()) {
      const calculatedHeartRate = (60 * numberOfBeats) / timeInSeconds;
      setHeartRate(calculatedHeartRate.toFixed(2));
      setError('');
    }
  };

  const resetFields = () => {
    setNumberOfBeats('');
    setTimeInSeconds('');
    setHeartRate(0);
    setError('');
  };

  const convertToMinutes = (seconds) => {
    return (seconds / 60).toFixed(2);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <h1 className="card-header text-center">Heart Rate Calculator</h1>
        <div className="card-body">
            <p>Heart rate refers to the number of times your heart beats in a minute. It's a vital sign that indicates the rate at which your heart pumps blood throughout your
                 body. A normal resting heart rate for adults is usually between 60 to 100 beats per minute and typically measured in beats per minutes (bpm).  Monitoring heart 
                 rate can be essential in assessing cardiovascular health, exercise intensity, and overall wellness.</p>
                 <form>
            <div className="form-group mt-3">
              <label htmlFor="beats"><b>Number of Beats:</b></label>
              <input
                type="number"
                className="form-control"
                id="beats"
                value={numberOfBeats}
                onChange={(e) => setNumberOfBeats(e.target.value)}
                placeholder="Enter number of beats"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="time"><b>Time Duration (seconds):</b></label>
              <input
                type="number"
                className="form-control"
                id="time"
                value={timeInSeconds}
                onChange={(e) => setTimeInSeconds(e.target.value)}
                placeholder="Enter time in seconds"
              />
              <small className="text-muted">
                Time in minutes: {convertToMinutes(timeInSeconds)} mins
              </small>
            </div>
            {error && <p className="text-danger">{error}</p>}
            <div className="row">
              <div className="col-md-6 mt-3 ">
                <button
                  type="button"
                  className="btn btn-dark btn-block"
                  onClick={calculateHeartRate}
                >
                  Calculate Heart Rate
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
          {heartRate > 0 && (
            <div className="mt-3 text-center">
              <h3>Heart Rate: {heartRate} beats/min</h3>
              <p className="text-muted">
                <b>Details: Number of Beats: {numberOfBeats}, Time: {timeInSeconds} seconds</b>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeartRateCalculator;