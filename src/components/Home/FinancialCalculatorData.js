// calculatorData.js
import { faMoneyBillAlt, faMoneyCheck, faCalendarAlt, faChartLine, faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';


export const calculators = [
    {
      name: 'Simple Interest',
      description: 'Calculate interest on principal using Simple Interest',
      link: '/simpleinterest',
      icon: faMoneyCheck,
    },
    {
      name: 'Compound Interest',
      description: 'Compute growth on principal with Compound Interest.',
      link: '/compoundinterest',
      icon: faMoneyBillAlt,
    },
    {
      name: 'Amortization Schedule',
      description: 'Track loan repayment with Amortization Schedule.',
      link: '/amortizationschedule',
      icon: faCalendarAlt,
    },

    {
      name: 'Return On Investment (ROI)',
      description: 'Measure profitability with Return on Investment.',
      link: '/roicalculator',
      icon: faChartLine,
    },

    {
      name: 'Future Value',
      description: 'Forecast investment growth with Future Value.',
      link: '/futurevalue',
      icon: faArrowAltCircleUp,
    },
    // Add more calculator types as needed
  ];
