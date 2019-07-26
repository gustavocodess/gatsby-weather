import { createAction } from 'redux-actions'
import moment from 'moment'
import * as types from './actionTypes'

const BASE_API = 'http://api.openweathermap.org/data/2.5/weather'
const API_KEY = process.env.GATSBY_WEATHER_API_KEY

export const fetchWeatherUpdate = (city, country) => (
  async (dispatch) => {
    dispatch(createAction(types.CLEAR_WEATHER_DATA)())
    const apiCall = await fetch(`${BASE_API}?q=${city},${country}&appid=${API_KEY}&units=metric`)
    const data = await apiCall.json()
    dispatch(createAction(types.FETCH_WEATHER_COMPLETE)({
      ...data,
      updateDate: moment().format('DD/MM/YYYY HH:mm:ss'),
    }))
  }
)

export default fetchWeatherUpdate
