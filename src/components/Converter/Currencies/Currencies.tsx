import './Currencies.scss';


function Currencies( {currenciesData} ) {
  const currienciesList = currenciesData.map((currency) => (
    <li key={currency.name} className="currencies-list-item">
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
