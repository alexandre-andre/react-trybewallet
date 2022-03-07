// import getCoins from '../../services/requestApi';
// Coloque aqui suas actions
// ACTION TYPES
const SEND_USER_LOGIN = 'SEND_USER_LOGIN';
const SEND_CURRENCIES = 'SEND_CURRENCIES';
const SEND_EXPENSES = 'SEND_EXPENSES';

export const actionTypes = {
  SEND_USER_LOGIN,
  SEND_CURRENCIES,
  SEND_EXPENSES,
};

// ACTION CREATORS
const sendUserLogin = (email) => ({ type: SEND_USER_LOGIN, payload: email });
const sendCurrencies = (currencies) => ({ type: SEND_CURRENCIES, payload: currencies });
const sendExpenses = (expenses) => ({ type: SEND_EXPENSES, payload: expenses });

export const actionCreators = {
  sendUserLogin,
  sendCurrencies,
  sendExpenses,
};
