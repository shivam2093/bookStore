import React, { useContext, useReducer, createContext } from 'react'

export const Usercontext = createContext();


export const Provider = ({ reducer, initialState, children }) => (

    <Usercontext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </Usercontext.Provider>


);


export const useStateValue = () => useContext(Usercontext);
