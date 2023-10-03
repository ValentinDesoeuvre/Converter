import './Converter.scss';

import currenciesData from '../../data/currencies';

import Currencies from './Currencies/Currencies';
import Header from './Header/Header';
import Result from './Result/Result';

function Converter() {
  return (
    <div className="converter">
      <Header />
      <Currencies currenciesData={currenciesData}/>
      <Result />
    </div>
  );
}

export default Converter;
