const oneCountryDetail = ( props ) => (
  <div>
    <h2>{props.country.name.common}</h2>
    <p>capital {props.country.capital}</p>
    <p>area {props.country.area}</p>
    <h3>languages</h3>
    <ul>
      {Object.values(props.country.languages).map((language, i) => (
        <li key={i}>{language}</li>
      ))}
    </ul>
    <img src={props.country.flags.png} alt="flag" width="350" height="200" />

    <h3>Weather in {props.country.capital}</h3>
    <p>temperature {props.weather.temperature} Celsius</p>
    <img src={props.weather.icon} alt="flag" width="100" height="100" />
    <p>wind {props.weather.wind} m/s</p>
  </div>
);

export default oneCountryDetail;