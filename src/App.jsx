import React, { useState, useEffect } from 'react'
import countryService from './services/countries'
import CountryInput from './components/CountryInput'
import Result from './components/Result'
import weatherService from './services/weather'

const App = () => {

  const [ country, setCountry ] = useState(null)
  const [ totalCountries, setTotalCountries ] = useState([])
  const [ countriesFiltered, setCountriesFiltered ] = useState([])
  const [ alert, setAlert ] = useState(null)
  const [ oneCountryFlag, setOneCountryFlag ] = useState(false)

  const [ weather, setWeather ] = useState([])

  useEffect(() => {
    if(country){
      countryService
        .getAll()
        .then(response => {
          setTotalCountries(response)
        })
    }

  }, [country])

  const filterCountries = (value) => {
    const filteredCountries = totalCountries.filter(country => 
      country.name.common.toLowerCase().includes(value.toLowerCase())
    );
    
    let alertMessage = null;
    let oneCountryFlag = false;

    if (value === '') {
      alertMessage = '';
    } else if (filteredCountries.length > 10) {
      alertMessage = "Too many matches, specify another filter";
    } else if (filteredCountries.length === 1) {
      oneCountryFlag = true;
      getWeather(filteredCountries[0].capital)
    }

    setAlert(alertMessage);
    setOneCountryFlag(oneCountryFlag);
    setCountriesFiltered(filteredCountries);
  }
  
  const setCountryToShow = (value) => {
    const filteredCountries = totalCountries.filter(country => 
      country.name.common.toLowerCase().includes(value.toLowerCase())
    );
    setCountriesFiltered(filteredCountries);
    setOneCountryFlag(true);
  }

  const getWeather = (value) => {
    weatherService
      .getWheater(value)
      .then(response => {
        setWeather({
          temperature: response.main.temp,
          wind: response.wind.speed,
          icon: 'https://openweathermap.org/img/wn/' + response.weather[0].icon + '.png'
        })
      })
  }

  return (
    <div>
      <CountryInput  
        country={country}
        setCountry={setCountry}
        filterCountries={filterCountries}
      />
      <Result
        countriesFiltered={countriesFiltered}
        alert={alert}
        oneCountryFlag={oneCountryFlag}
        setCountryToShow={setCountryToShow}
        weather={weather}
      />
    </div>
  )
}

export default App
