// calculatorData.js
import { faCalculator, faBalanceScale, faChartBar, faChartLine, faCoins } from '@fortawesome/free-solid-svg-icons';


export const mathcalculators = [
    {
      name: 'Percentage Calculator',
      description: 'Compute proportions relative to a whole (percentage).',
      link: '/percentagecalculator',
      icon: faChartLine,
    },
    {
      name: 'Percentage Change',
      description: 'Percentage shift between two values or over time.',
      link: '/percentagechange',
      icon: faCalculator,
    },
    {
      name: 'Percentage Depreciation',
      description: 'Decrease in value by percentage over time.',
      link: '/percentagedepreciation',
      icon: faChartBar,
    },

    {
      name: 'Percentage Difference',
      description: 'Measure of change between two values in percentage.',
      link: '/percentagedifference',
      icon: faBalanceScale,
    },

    {
      name: 'Tip Calculator',
      description: 'Calculate gratuity amount based on bill total.',
      link: '/tipcalculator',
      icon: faCoins,
    },
    // Add more calculator types as needed
  ];
