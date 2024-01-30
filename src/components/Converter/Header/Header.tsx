import './Header.scss';

function Header({ amount, setAmount }) {
  // Gère le changement du montant à convertir
  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <header className="header">
      <h1 className="header-title">Converter</h1>
      <p className="header-amount">
        <input
          type="number"
          placeholder="Amount"
          aria-label="Amount"
          className="header-amount__input"
          min={1}
          value={amount}
          onChange={handleChange}
        />
        euro
      </p>
    </header>
  );
}

export default Header;
