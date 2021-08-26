import { Action } from '../actions/index';
import {ActionType} from '../action-types/index'
const initialState = 0;



const reducer = (state: number = initialState, action:Action) => {
  switch (action.type) {
    case ActionType.DEPOSIT:
      return state+action.payload
      break;
    case ActionType.WITHDRAW:
      return state-action.payload
      break;
    case ActionType.BANKRUPT:
      return 0
      break;
  
    default:
      return state
      break;
  }
  
}
export default reducer