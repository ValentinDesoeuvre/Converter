import { useState } from 'react';

import { Currency } from '../../../interfaces';
import Searchbar from './Searchbar/Searchbar';

import './Currencies.scss';

interface CurrenciesProps {
  currenciesData: Currency[];
  setCurrency: React.Dispatch<React.SetStateAction<Currency>>;
}

function Currencies({ currenciesData, setCurrency }: CurrenciesProps) {
  const [search, setSearch] = useState('');

  // Selectionne une devise lorsque l'on clique dessus
  function handleClick(currency: Currency) {
    setCurrency(currency);
  }

  // Filtre la liste des devises en fonction de la chainde de caractères search
  const filteredCurrencies = currenciesData.filter((currency) => {
    if (!search.trim().length) {
      return true;
    }
    return currency.name
      .toLocaleLowerCase()
      .includes(search.trim().toLocaleLowerCase());
  });

  // Crée la liste de devises
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
      <Searchbar search={search} setSearch={setSearch} />
      <ul className="currencies-list">{currienciesList}</ul>
    </div>
  );
}

export default Currencies;
