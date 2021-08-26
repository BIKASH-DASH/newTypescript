const initialState = 0;

type Action = {
  type: string,
  payload?:number
}

const reducer = (initialState: number, action:Action) => {
  switch (action.type) {
    case 'DEPOSIT':
      return initialState+action.payload
      break;
    case 'WITHDRAW':
      return initialState-action.payload
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