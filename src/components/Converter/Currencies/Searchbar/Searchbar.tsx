import './Searchbar.scss';

function Searchbar({search, setSearch}) {
  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  return (
    <input 
      type="search"
      placeholder="Search a currency..." 
      aria-label="Search a currency..."
      className="currencies-searchbar"
      value={search}
      onChange={handleChange}
    />
  );
}

export default Searchbar;
