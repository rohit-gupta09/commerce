import { legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {productListReducer, productDetailsReducer} from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import {userLoginReducer,userRegisterReducer,userDetailReducer} from './reducers/userReducers'
import { apiSlice } from './slices/apiSlice'
import { configureStore } from '@reduxjs/toolkit'
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetail: userDetailReducer

})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null


const initialState = {
    cart:{ cartItems:cartItemsFromStorage  },
    userLogin:{userInfo:userInfoFromStorage}
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
// const store =configureStore({
//     reducer:{
//         [apiSlice.reducerPath]:apiSlice.reducer
//     },
//     middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware),
//     devTools:true
// })
export default store

