import React, { useState, useContext, useEffect,useReducer } from 'react'
import {initialState ,reducer} from './reducer';
const AppContext = React.createContext()
const AppProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initialState);
   const  [item,setItem] =  useState({img:[]})
  
  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
        item,
        setItem
      }}>
      {children}
    </AppContext.Provider>
  )}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }