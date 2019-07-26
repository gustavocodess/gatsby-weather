import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import weather from './weather'

const middlewares = applyMiddleware(thunk)

const rootReducer = combineReducers({
  weather,
})

const store = createStore(
  rootReducer,
  middlewares,
)

export default store
