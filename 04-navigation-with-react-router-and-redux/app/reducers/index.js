import { combineReducers } from 'redux';
import products from './products';
import selectedProduct from './selected-product';

export default combineReducers({
  products,
  selectedProduct
})
