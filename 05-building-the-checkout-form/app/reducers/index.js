import { combineReducers } from 'redux';
import products from './products';
import selectedProduct from './selected-product';
import { reducer as form } from 'redux-form';

export default combineReducers({
  products,
  selectedProduct,
  form
})
