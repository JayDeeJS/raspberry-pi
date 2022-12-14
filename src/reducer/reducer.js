import React from "react";

export const initialState = {
    basket: [],
    user: null,
}

export const getUmbrellaTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    /*console.log(action);*/
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'ADD_TO_UMBRELLA':
            //Logic for adding item to umbrella
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_UMBRELLA':
            //Logic for removing item from umbrella

            //basket cloned
            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0){
                newBasket.splice(index, 1)
            } else{
                console.warn(
                    `Can't remove product (id:${action.id})`)
            }

            return {
                ...state,
                basket: newBasket
            };
        default:
            return state;
    }
}
export default reducer;
