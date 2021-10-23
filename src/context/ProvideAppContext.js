import React, { createContext, useReducer } from 'react';
import cardInitialState from './initialStates/cardInitialState';
import cards from './reducers/cards';

export const AppContext = createContext({})

export const AppContextProvider = ({ children }) => {
  const [ cardsState, cardsDispatch ] = useReducer(
    cards,
    cardInitialState
  )
  return (
    <AppContext.Provider
      value={{ cardsState, cardsDispatch }}
    >
      {children}
    </AppContext.Provider>
  )
}