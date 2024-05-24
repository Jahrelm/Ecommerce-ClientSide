import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {thunk }from 'redux-thunk'; // Import thunk middleware
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';
import authReducer from './reducers/authReducer';

const store = configureStore({
  reducer: {
    product: productReducer,
    cart : cartReducer,
    auth : authReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
