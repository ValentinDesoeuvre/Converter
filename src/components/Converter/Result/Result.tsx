import { Currency } from '../../../interfaces';
import './Result.scss';

interface ResultProps {
  currency: Currency;
}

function Result( {currency}: ResultProps ) {
  return (
    <div className="result">
      <p className="result-rate">{currency.rate}</p>
      <p className="result-currency">{currency.name}</p>
    </div>
  );
}

export default Result;
