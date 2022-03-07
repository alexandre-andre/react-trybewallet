// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { actionTypes } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case actionTypes.SEND_CURRENCIES:
    return {
      ...state,
      currencies: [...state.currencies, action.payload], // espalha o array currencies e o action.currencies
    };
  case actionTypes.SEND_EXPENSES:
    return {
      ...state,
      expenses: state.expenses.concat(action.payload), // pega o array e concatena action.payload nele
    };
  default:
    return state;
  }
};

export default wallet;
