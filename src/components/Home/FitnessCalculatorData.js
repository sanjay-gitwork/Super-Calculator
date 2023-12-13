// calculatorData.js
import {  faWeight, faUtensils, faRunning, faTint, faHeartbeat } from '@fortawesome/free-solid-svg-icons';


export const fitnesscalculators = [
    {
      name: 'Body Mass Index (BMI)',
      description: 'Assess health status using Body Mass Index.',
      link: '/bmicalculator',
      icon: faWeight,
    },
    {
      name: 'Calorie Counter',
      description: 'Track and manage daily calories consumed.',
      link: '/caloriecounter',
      icon: faUtensils,
    },
    {
      name: 'Calorie Tracker',
      description: 'Monitor intake and burn with Calorie Tracker.',
      link: '/basiccalorietracker',
      icon: faRunning,
    },

    {
      name: 'Blood Pressure',
      description: 'Estimate blood pressure levels accurately.',
      link: '/bloodpressure',
      icon: faTint,
    },

    {
      name: 'Heart Rate',
      description: 'Measure heart rate for health assessment.',
      link: '/heartrate',
      icon: faHeartbeat,
    },
    // Add more calculator types as needed
  ];
