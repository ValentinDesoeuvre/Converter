import { useState } from 'react';
import './Converter.scss';

import currenciesData from '../../data/currencies';

import Currencies from './Currencies/Currencies';
import Header from './Header/Header';
import Result from './Result/Result';

function Converter() {
  const [currency, setCurrency] = useState(currenciesData[0]);

  return (
    <div className="converter">
      <Header />
      <Currencies currenciesData={currenciesData} setCurrency={setCurrency}/>
      <Result currency={currency}/>
    </div>
  );
}

export default Converter;
