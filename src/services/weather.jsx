import axios from 'axios'
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q='
const api_key = process.env.REACT_APP_APPID

const getWheater = (value) => {
  const request = axios.get(`${baseUrl}${value}&APPID=${api_key}&units=metric`)
  return request.then(response => {
    return response.data
  })
}

export default { getWheater }
