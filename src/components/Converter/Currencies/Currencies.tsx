import { Currency } from '../../../interfaces';
import './Currencies.scss';

interface CurrenciesProps {
  currenciesData: Currency[];
  setCurrency: React.Dispatch<React.SetStateAction<Currency>>;
}

function Currencies( {currenciesData, setCurrency}: CurrenciesProps ) {
  function handleClick(currency: Currency) {
    setCurrency(currency);
  }

  const currienciesList = currenciesData.map((currency) => (
    <li 
      key={currency.name} 
      className="currencies-list-item" 
      onClick={() => handleClick(currency)}
    >
      {currency.name}
    </li>
  ));

  return (
    <div className="currencies">
      <h2 className='currencies-title'>Currencies</h2>
      <ul className="currencies-list">
        {currienciesList}
      </ul>
    </div>
  );
}

export default Currencies;

