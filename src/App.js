import React, { useReducer } from "react";

export default function App() {

  const initialState = { 
    count:0
  }

  function reducer(state = initialState, action){
    switch(action.type){
      case "increment":
        return {count: state.count + 1}
      default:
        return initialState
    }
  } 

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
  <div>{state.count}</div>
  <button onClick={() => dispatch({type:'increment'})}>Up</button>
  </>
    )
}
