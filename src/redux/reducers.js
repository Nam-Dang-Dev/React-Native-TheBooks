import {combineReducers} from 'redux';
import homeReducer from './home/reducer';
import SideBarReducers from './sideBar/reducer';

import registerReducer from './auth/Register/reducer';
import loginReducer from './auth/Login/reducer';
import cartReducers from './cart/reducer';

const rootReducer = combineReducers({
  homeReducer,
  registerReducer,
  loginReducer,
  SideBarReducers,
  cartReducers,
});

export default rootReducer;
