import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import FlightReducer from './FlightReducer'

const store = createStore(
  FlightReducer,
  composeWithDevTools(applyMiddleware(logger))
)

export default store
