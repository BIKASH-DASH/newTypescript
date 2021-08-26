import {ActionType} from '../action-types/index'

interface DepositAction {
  type: ActionType.DEPOSIT,
  payload:number
}
interface withDrawAction {
  type: ActionType.WITHDRAW,
  payload:number
}

interface bankruptAction {
  type: ActionType.BANKRUPT
}

export  type Action = DepositAction | withDrawAction | bankruptAction;