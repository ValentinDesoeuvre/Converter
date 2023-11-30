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
      <Header amount={amount} setAmount={setAmount}/>
      <Currencies currenciesData={currenciesData} setCurrency={setCurrency}/>
      <Result currency={currency} amount={amount} />
    </div>
  );
}

export default Converter;
