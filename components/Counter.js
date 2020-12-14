import React, { useReducer, useContext } from 'react'


const initialState ={
  jwt : "",
  userrole: "",
  isAuthenticated :false 
}
export const AppStateContext = React.createContext()
export const AppDispatchContext = React.createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'SETJWT':
      return {...state,jwt : action.payload}
    case 'SETUSERROLE':
      return {
        ...state , userrole : action.payload
      }
    case 'AUTHENTICATION':
      return {
        ...state, isAuthenticated : action.payload
      }
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppDispatchContext.Provider value={dispatch}>
      <AppStateContext.Provider value={state}>
        {children}
      </AppStateContext.Provider>
    </AppDispatchContext.Provider>
  )
}

export const useDetails = () => useContext(AppStateContext)
export const useDispatchDetails = () => useContext(AppDispatchContext)
