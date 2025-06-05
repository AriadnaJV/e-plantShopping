import { configureStore } from '@reduxjs/toolkit'; //set up the Redux store.
import cartReducer from './CartSlice'; //manages the state slice related to the shopping cart.
 const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
export default store;
