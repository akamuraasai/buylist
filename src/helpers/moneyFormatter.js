import { format as formatter } from 'currency-formatter';

const format = {
  symbol: '',
  thousand: '.',
  decimal: ',',
  precision: 2,
};

const moneyFormat = value => formatter(value, format);

export default moneyFormat;