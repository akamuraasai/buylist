import { combineReducers } from 'redux';

import ProductsReducer from './base/Collection/ProductList/ProductList.reducer';

export default combineReducers({
  products: ProductsReducer,
});
