import { combineReducers } from 'redux'
import bankReducers from './bankReducer'
const reducers = combineReducers({
  bank: bankReducers
})

export default reducers