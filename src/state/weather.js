import * as types from '../actions/actionTypes'

const initialState = null

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_WEATHER_COMPLETE:
      return { ...payload }
    case types.CLEAR_WEATHER_DATA:
      return { ...initialState }
    default:
      return state
  }
}
