const initialState = 0;

interface DepositAction {
  type: "DEPOSIT",
  payload:number
}
interface withDrawAction {
  type: "WITHDRAW",
  payload:number
}

interface bankruptAction {
  type: "BANKRUPT"
}

type Action = DepositAction | withDrawAction | bankruptAction;

const reducer = (state: number = initialState, action:Action) => {
  switch (action.type) {
    case 'DEPOSIT':
      return state+action.payload
      break;
    case 'WITHDRAW':
      return state-action.payload
      break;
    case 'BANKRUPT':
      return 0
      break;
  
    default:
      return state
      break;
  }
  
}
export default reducer