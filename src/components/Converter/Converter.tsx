import { useState } from 'react';
import './Converter.scss';

import currenciesData from '../../data/currencies';

import Currencies from './Currencies/Currencies';
import Header from './Header/Header';
import Result from './Result/Result';

function Converter() {
  const [currency, setCurrency] = useState(currenciesData[0]);
  const [amount, setAmount] = useState(1);

  return (
    <div className="converter">
      {/* Affiche le titre et le montant modifiable à convertir */}
      <Header amount={amount} setAmount={setAmount} />

      {/* Affiche la liste des devises et la barre de recherche */}
      <Currencies currenciesData={currenciesData} setCurrency={setCurrency} />

      {/* Affiche le résultat de la conversion */}
      <Result currency={currency} amount={amount} />
    </div>
  );
}

export default Converter;
