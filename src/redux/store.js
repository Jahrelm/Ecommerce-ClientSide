import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {thunk }from 'redux-thunk'; // Import thunk middleware
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';

const store = configureStore({
  reducer: {
    product: productReducer,
    cart : cartReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
