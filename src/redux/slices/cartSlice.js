import { createSlice } from "@reduxjs/toolkit";

const getInitialCart = () =>{
    const cart = sessionStorage.getItem('Cart')
    if(cart){
        return JSON.parse(cart)
    }else{
        return []
    }
}

const getInitialItemsInCart = () =>{
    const cart = sessionStorage.getItem('Cart')
    if(cart){
        const cartItems = JSON.parse(cart).reduce((accumulator, currentItem) =>{
            return accumulator + currentItem.quantity
        }, 0)
        return cartItems
    }else{
        return 0
    }
}

const initialState ={
    itemsInCart: getInitialItemsInCart(),
    cart: getInitialCart()
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
                    sessionStorage.setItem('Cart', JSON.stringify(state.cart))
                }else{
                    state.cart.push({...action.payload, quantity: 1})
                    sessionStorage.setItem('Cart', JSON.stringify(state.cart))
                }
            }else{
                state.cart.push({...action.payload, quantity: 1})
                sessionStorage.setItem('Cart', JSON.stringify(state.cart))
            }
            state.itemsInCart += 1
        },
        REMOVE_FROM_CART: (state, action) =>{
            const itemQty = state.cart.find((item) => item._id === action.payload._id)
            state.cart = state.cart.filter((item) => item._id !== action.payload._id)
            sessionStorage.setItem('Cart', JSON.stringify(state.cart))
            state.itemsInCart -= itemQty.quantity
        },
        INCREASE_QUANTITY: (state, action) =>{

        },
        DECREASE_QUANTITY: (state, action) =>{

        },
        NUMBER_CART: (state, action) =>{

        },
    }
})

export const {ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, NUMBER_CART} = cartSlice.actions
export default cartSlice.reducer