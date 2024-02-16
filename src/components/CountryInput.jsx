const CountryInput = ( props ) => {

    const handleCountryNameChange = (event) => {
        props.setCountry(event.target.value)
        props.filterCountries(event.target.value) 
    }
  
      return (
        <form>
          <div>
            find countries: <input value={props.country} onChange={handleCountryNameChange} />
          </div>
        </form>
      )
  }
  
  export default CountryInput
  