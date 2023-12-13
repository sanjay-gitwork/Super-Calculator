import React, { useState } from 'react';

function BasicCalorieTracker() {
  const [foodItems, setFoodItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [servings, setServings] = useState('');
  const [caloriesPerServing, setCaloriesPerServing] = useState('');
  const [totalCalories, setTotalCalories] = useState(0);
  const [error, setError] = useState('');
  const [dailyGoal, setDailyGoal] = useState('');
  const [remainingCalories, setRemainingCalories] = useState('');

  const calculateTotalCalories = () => {
    if (!servings || !caloriesPerServing || !itemName) {
      setError('All fields are required');
      return;
    }

    const calculatedCalories = servings * caloriesPerServing;
    const newItem = {
      itemName,
      servings,
      caloriesPerServing,
      totalCalories: calculatedCalories,
    };
    const updatedFoodItems = [...foodItems, newItem];
    setFoodItems(updatedFoodItems);

    const totalCaloriesConsumed = updatedFoodItems.reduce((total, item) => total + item.totalCalories, 0);
    setTotalCalories(totalCaloriesConsumed);
    setError('');
    setItemName('');
    setServings('');
    setCaloriesPerServing('');
  };

  const resetFields = () => {
    setFoodItems([]);
    setTotalCalories(0);
    setDailyGoal('');
    setRemainingCalories('');
  };

  const calculateRemainingCalories = () => {
    if (!dailyGoal || totalCalories === 0) {
      setError('Please set a daily goal and add some food items first');
      return;
    }

    const remaining = dailyGoal - totalCalories;
    setRemainingCalories(remaining);
    setError('');
  };

  return (
    <div className="container mt-5">
      <div className="card shadow ">
        <h1 className="card-header text-center">Calorie Counter</h1>
        <div className="card-body">
          <p>Track your calorie intake by entering the food item, servings, and calories per serving.</p>
          <form>
            <div className="form-group mt-3">
              <label htmlFor="itemName"><b>Food Item:</b></label>
              <input
                type="text"
                className="form-control"
                id="itemName"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                placeholder="Enter food item name"
              />
            </div>
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
            <button
              type="button"
              className="btn btn-dark btn-block mt-3"
              onClick={calculateTotalCalories}
            >
              Add Food Item For Calculation
            </button>
          </form>
          {foodItems.length > 0 && (
            <div className="mt-4">
              <h3>Food Items Added:</h3>
              <ul>
                {foodItems.map((item, index) => (
                  <li key={index}>
                    {item.itemName} - {item.servings} servings ({item.caloriesPerServing} cal/serving) - Total: {item.totalCalories} cal
                  </li>
                ))}
              </ul>
            </div>
          )}
          {totalCalories > 0 && (
            <div className="mt-4">
              <h3>Total Calories Consumed: {totalCalories} cal</h3>
            </div>
          )}
          <div className="form-group mt-4">
            <label htmlFor="dailyGoal"><b>Set Daily Calorie Goal:</b></label>
            <input
              type="number"
              className="form-control"
              id="dailyGoal"
              value={dailyGoal}
              onChange={(e) => setDailyGoal(e.target.value)}
              placeholder="Enter your daily calorie goal"
            />
          </div>

            

          <button
            type="button"
            className="btn btn-dark btn-block mt-3"
            onClick={calculateRemainingCalories}
          >
            Calculate Remaining Calories
          </button>
          {remainingCalories !== '' && (
            <div className="mt-4">
              <h3>Remaining Calories: {remainingCalories} cal</h3>
            </div>
          )}
          <br></br>
          <button
            type="button"
            className="btn btn-dark btn-block mt-3"
            onClick={resetFields}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default BasicCalorieTracker;
