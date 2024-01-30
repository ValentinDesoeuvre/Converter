import { Currency } from '../../../interfaces';
import './Result.scss';

interface ResultProps {
  currency: Currency;
  amount: number;
}

function Result({ currency, amount }: ResultProps) {
  return (
    <div className="result">
      <p className="result-rate">{(amount * currency.rate).toFixed(2)}</p>
      <p className="result-currency">{currency.name}</p>
    </div>
  );
}

export default Result;
