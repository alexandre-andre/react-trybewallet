// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { actionTypes } from '../actions/walletActions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoagind: true,
  allCoins: {},
  errorMessage: '',
  id: 0,
  isEdit: false,
  editing: {},
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case actionTypes.UPDATE_ID:
    return {
      ...state,
      isEdit: false,
      id: state.id + 1,
    };
  case actionTypes.UPDATE_EXPENSES:
    return {
      ...state,
      isEdit: false,
      expenses: action.payload, // pega o array e concatena action.payload nele
    };
  case actionTypes.IS_EDIT:
    return {
      ...state,
      isEdit: true,
      editing: action.payload,
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
      allCoins: action.payload,
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
