import { combineReducers } from 'redux';
// import user from './user';
import user from './user';
// import wallet from './wallet';
import wallet from './wallet';
import coins from './coinsReducers';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
const rootReducer = combineReducers({
  user,
  wallet,
  coins,
});

export default rootReducer;
