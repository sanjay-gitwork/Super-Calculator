import React, { useState } from 'react';

function BloodPressureCalculator() {
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState('');

  const validateInputs = () => {
    if (!systolic || !diastolic) {
      setError('Both systolic and diastolic pressures are required');
      return false;
    }
    return true;
  };

  const calculateBloodPressure = () => {
    if (validateInputs()) {
      const isNormal = systolic >= 90 && systolic <= 120 && diastolic >= 60 && diastolic <= 80;
      setResult(isNormal ? 'Normal Blood Pressure' : 'Abnormal Blood Pressure');
      setError('');
    }
  };

  const classifyBloodPressure = () => {
    if (validateInputs()) {
      const systolicValue = parseInt(systolic);
      const diastolicValue = parseInt(diastolic);
  
      if (systolicValue >= 90 && systolicValue <= 120 && diastolicValue >= 60 && diastolicValue <= 80) {
        setResult('Normal Blood Pressure');
      } else if (systolicValue > 120 && systolicValue <= 129 && diastolicValue <= 80) {
        setResult('Elevated Blood Pressure');
      } else if ((systolicValue >= 130 && systolicValue <= 139) || (diastolicValue >= 80 && diastolicValue <= 89)) {
        setResult('Hypertension Stage 1');
      } else if ((systolicValue >= 140 && systolicValue <= 180) || (diastolicValue >= 90 && diastolicValue <= 120)) {
        setResult('Hypertension Stage 2');
      } else {
        setResult('Hypertensive Crisis');
      }
  
      setError('');
    }
  };

  const resetFields = () => {
    setSystolic('');
    setDiastolic('');
    setResult('');
    setError('');
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <h1 className="card-header text-center">Blood Pressure Calculator</h1>
        
        <div className="card-body">
            <p>Blood pressure refers to the force exerted by circulating blood against the walls of blood vessels, primarily arteries, as it flows through the body. It consists of two measurements:</p>

            <p><b>Systolic Pressure: </b> The higher number represents the pressure in the arteries when the heart beats and pumps blood out during a heartbeat. <br></br>
            <b>Diastolic Pressure: </b> The lower number represents the pressure in the arteries when the heart rests between beats and refills with blood.</p>

            <p>Blood pressure is typically measured in millimeters of mercury (mmHg) and is expressed as systolic over diastolic pressure, such as 120/80 mmHg. 
                This measurement is crucial as it indicates the force exerted by the blood on the arterial walls and is essential for proper circulation of blood throughout
                 the body.</p>
          <form>
            <div className="form-group mt-3">
              <label htmlFor="systolic"><b>Systolic Pressure:</b></label>
              <input
                type="number"
                className="form-control"
                id="systolic"
                value={systolic}
                onChange={(e) => setSystolic(e.target.value)}
                placeholder="Enter systolic pressure"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="diastolic"><b>Diastolic Pressure:</b></label>
              <input
                type="number"
                className="form-control"
                id="diastolic"
                value={diastolic}
                onChange={(e) => setDiastolic(e.target.value)}
                placeholder="Enter diastolic pressure"
              />
            </div>
            {error && <p className="text-danger">{error}</p>}
            <div className="row">
              <div className="col-md-6 mt-3 ">
                <button
                  type="button"
                  className="btn btn-dark btn-block"
                //   onClick={calculateBloodPressure}
                onClick={classifyBloodPressure}
                >
                  Calculate Blood Pressure
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
          {result && (
            <div className="mt-3 text-center">
              <h3>{result}</h3>
              <p className="text-muted">
                <b>Systolic Pressure: {systolic}</b>
              </p>
              <p className="text-muted">
                <b>Diastolic Pressure: {diastolic}</b>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BloodPressureCalculator;
