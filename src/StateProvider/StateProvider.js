//setup data layer to track the umbrella
import React, {createContext, useContext, useReducer} from 'react';

//Data layer
export const StateContext = createContext();

//Context provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);
