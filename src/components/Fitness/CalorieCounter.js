import React, { useState } from 'react';

function CalorieCounter() {
  const [servings, setServings] = useState('');
  const [caloriesPerServing, setCaloriesPerServing] = useState('');
  const [totalCalories, setTotalCalories] = useState(0);
  const [error, setError] = useState('');

  const validateInputs = () => {
    if (!servings || !caloriesPerServing) {
      setError('All fields are required');
      return false;
    }
    return true;
  };

  const calculateTotalCalories = () => {
    if (validateInputs()) {
      const calculatedCalories = servings * caloriesPerServing;
      setTotalCalories(calculatedCalories);
      setError('');
    }
  };

  const resetFields = () => {
    setServings('');
    setCaloriesPerServing('');
    setTotalCalories(0);
    setError('');
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <h1 className="card-header text-center">Calorie Counter</h1>
        <div className="card-body">
          <p>A calorie counter is a method used to track and manage daily caloric intake and expenditure. It helps individuals monitor the number of calories consumed through 
            food and beverages.</p>
          <form>
            <div className="form-group mt-3">
              <label htmlFor="servings"><b>Servings:</b></label>
              <input
                type="number"
                className="form-control"
                id="servings"
                value={servings}
                onChange={(e) => setServings(e.target.value)}
                placeholder="Enter number of servings"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="calories"><b>Calories per Serving:</b></label>
              <input
                type="number"
                className="form-control"
                id="calories"
                value={caloriesPerServing}
                onChange={(e) => setCaloriesPerServing(e.target.value)}
                placeholder="Enter calories per serving"
              />
            </div>
            {error && <p className="text-danger">{error}</p>}
            <div className="row">
              <div className="col-md-6 mt-3">
                <button
                  type="button"
                  className="btn btn-dark btn-block"
                  onClick={calculateTotalCalories}
                >
                  Calculate Total Calories
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
          {totalCalories > 0 && (
            <div className="mt-3 text-center">
              <h3>Total Calories: {totalCalories}</h3>
              <p className="text-muted">
                <b>Details: Servings: {servings}, Calories per Serving: {caloriesPerServing}</b>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CalorieCounter;
