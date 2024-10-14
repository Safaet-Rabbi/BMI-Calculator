import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const bmiValue = (weight / (height * height)).toFixed(2); // Use height in meters directly
      setBmi(bmiValue);

      // Determine BMI category
      if (bmiValue < 18.5) {
        setMessage('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setMessage('Normal weight');
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setMessage('Overweight');
      } else {
        setMessage('Obesity');
      }
    } else {
      setMessage('Please enter valid weight and height.');
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="center">BMI Calculator</h1>
        <div>
          <label>
            Weight (kg):
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter weight"
            />
          </label>
        </div>
        <div>
          <label>
            Height (m): {/* Accept height in meters */}
            <input
              type="number"
              step="0.01"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter height in meters"
            />
          </label>
        </div>
        <button className="btn" onClick={calculateBMI}>Calculate BMI</button>

        {bmi && (
          <div className="center">
            <h2>Your BMI: {bmi}</h2>
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
