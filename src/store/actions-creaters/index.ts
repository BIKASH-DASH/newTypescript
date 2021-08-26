import { ActionType } from "../action-types"
import { Dispatch } from 'redux'
import {Action} from '../actions/index'


export const depositMony = (amount: number) => {
  
  return (dispatch:Dispatch<Action>) => {
    dispatch({
      type: ActionType.DEPOSIT,
      payload:amount
    })
   }
  
}



export const withdrawMony = (amount: number) => {
  
  return (dispatch:Dispatch<Action>) => {
    dispatch({
      type: ActionType.WITHDRAW,
      payload:amount
    })
   }
  
}

export const bankrupt = (amount: number) => {
  
  return (dispatch:Dispatch<Action>) => {
    dispatch({
      type: ActionType.BANKRUPT
    })
   }
  
}