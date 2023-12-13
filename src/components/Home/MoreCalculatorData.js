// calculatorData.js
import { faCalendar, faClock, faDice, faHourglass, faUser } from '@fortawesome/free-solid-svg-icons';


export const morecalculators = [
    {
      name: 'Age Calculator',
      description: 'Calculate age based on date of birthdate.',
      link: '/agecalculator',
      icon: faCalendar,
    },
    {
      name: 'Time Calculator',
      description: 'Calculate time differences & durations',
      link: '/timecalculator',
      icon: faClock,
    },
    {
      name: 'Random Number',
      description: 'Generate random numbers instantly based on parameter',
      link: '/randomnumber',
      icon: faDice,
    },

    {
      name: 'Time Period',
      description: 'Calculate time spans or durations between dates.',
      link: '/timeperiod',
      icon: faHourglass,
    },

    {
      name: 'Random Names',
      description: 'Generate unique and random names effortlessly.',
      link: '/randomnames',
      icon: faUser,
    },
    // Add more calculator types as needed
  ];
