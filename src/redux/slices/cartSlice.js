import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    itemsInCart: 0,
    cart: []
}

export const cartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers:{
        ADD_TO_CART: (state, action) =>{
            if(state.cart.length){
                const itemIndex = state.cart.findIndex((item) => item._id === action.payload._id)
                if(itemIndex >= 0){
                    state.cart[itemIndex].quantity += 1
                }else{
                    state.cart.push({...action.payload, quantity: 1})
                }
            }else{
                state.cart.push({...action.payload, quantity: 1})
            }
            state.itemsInCart += 1
        },
        REMOVE_CART: (state, action) =>{

        },
        INCREASE_QUANTITY: (state, action) =>{

        },
        DECREASE_QUANTITY: (state, action) =>{

        },
        NUMBER_CART: (state, action) =>{

        },
    }
})

export const {ADD_TO_CART, REMOVE_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, NUMBER_CART} = cartSlice.actions
export default cartSlice.reducer