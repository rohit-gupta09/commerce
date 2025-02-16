import axios from 'axios'
import { CART_ADD_ITEM,CART_REMOVE_ITEM } from '../constants/cartConstants'

export const addTo = (id, qty) => async(dispatch,getState) => {
   
    console.log(id)
    console.log(qty)
    const endpoint = 'http://localhost:5000/api/products/'
    const {data} = await axios.get(`${endpoint}${id}`);
    console.log(data)
    dispatch({
        type: CART_ADD_ITEM,
        payload:{
            product:data._id,
            name: data.name,
            image: data.image,
            price:data.price,
            countInStock: data.countInStock,
            qty
        }
    })

    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch,getState) =>{
    dispatch({
        type:CART_REMOVE_ITEM,
        payload:id
    })

    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}