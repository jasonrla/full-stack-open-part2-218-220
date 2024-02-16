import OneCountryDetail from "./OneCountryDetail";
import CountriesFiltered from "./CountriesFiltered";

const CountryInput = (props) => {
    if (props.oneCountryFlag === true) {
      return <OneCountryDetail country={props.countriesFiltered[0]} weather={props.weather} />;
    }
  
    if (props.alert !== null) {
      return <div>{props.alert}</div>;
    }
  
    return <CountriesFiltered countries={props.countriesFiltered} setCountryToShow={props.setCountryToShow} />;
  };
  
  export default CountryInput;