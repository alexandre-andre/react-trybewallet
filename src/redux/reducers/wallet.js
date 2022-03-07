// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { actionTypes } from '../actions/walletActions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoagind: true,
  allCoins: {},
  errorMessage: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  // case actionTypes.SEND_CURRENCIES:
  //   return {
  //     ...state,
  //     currencies: [...state.currencies, action.payload], // espalha o array currencies e o action.currencies
  //   };
  case actionTypes.SEND_EXPENSES:
    return {
      ...state,
      expenses: state.expenses.concat(action.payload), // pega o array e concatena action.payload nele
    };
  case actionTypes.REQUEST_BEGIN: // inicio da requisicao
    return {
      ...state,
      isLoagind: true,
    };
  case actionTypes.REQUEST_SUCCESS: // requisicao ok
    return {
      ...state,
      isLoagind: false,
      allCoins: { ...state.allCoins, ...action.payload },
      currencies: Object.keys(action.payload), // cria um array com as chaves do objeto
    };
  case actionTypes.REQUEST_FAILURE: // requisicao nao ok
    return {
      ...state,
      isLoagind: false,
      errorMessage: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
