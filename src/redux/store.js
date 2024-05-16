import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {thunk }from 'redux-thunk'; // Import thunk middleware
import productReducer from './reducers/productReducer';

const store = configureStore({
  reducer: {
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
