import './index.css';
import numeral from 'numeral';

const val = numeral(1000).format('$0,0.00');

// eslint-disable-next-line
console.log(`I would pay you ${val}`);
