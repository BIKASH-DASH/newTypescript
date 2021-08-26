import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import {actionCreaters,State} from '../store'

export default function MainPage() {
  const dispatch = useDispatch();
  const amount = useSelector((state:State)=>state.bank)
  const { depositMony, withdrawMony, bankrupt } = bindActionCreators(actionCreaters, dispatch);

  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={()=>depositMony(1000)}>Deposit</button>
      <button onClick={()=>withdrawMony(100)}>Withdraw</button>
      <button onClick={()=>bankrupt()}>bankrupt</button>
    </div>
  )
}
