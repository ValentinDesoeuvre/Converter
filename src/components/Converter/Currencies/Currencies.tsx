import { useState } from 'react';

import { Currency } from '../../../interfaces';
import Searchbar from './Searchbar/Searchbar';

import './Currencies.scss';

interface CurrenciesProps {
  currenciesData: Currency[];
  setCurrency: React.Dispatch<React.SetStateAction<Currency>>;
}

function Currencies( {currenciesData, setCurrency}: CurrenciesProps ) {
  const [search, setSearch] = useState('');
  
  function handleClick(currency: Currency) {
    setCurrency(currency);
  }

  const filteredCurrencies = currenciesData.filter((currency) => {
    if(!search.trim().length){
      return true;
    }
    return currency.name.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase());
  })

  const currienciesList = filteredCurrencies.map((currency) => (
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
      {/* <h2 className='currencies-title'>Currencies</h2> */}
      <Searchbar search={search} setSearch={setSearch}/>
      <ul className="currencies-list">
        {currienciesList}
      </ul>
    </div>
  );
}

export default Currencies;

