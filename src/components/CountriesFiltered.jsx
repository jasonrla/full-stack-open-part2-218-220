const CountriesFiltered = ( props ) => (
  <ul>
    {props.countries.map((country, i) => (
      <li key={i}>
        {country.name.common}
        <button onClick={() => props.setCountryToShow(country.name.common)}>
          show
        </button>
      </li>
    ))}
  </ul>
);

export default CountriesFiltered;