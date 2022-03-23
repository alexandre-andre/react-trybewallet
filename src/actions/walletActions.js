import getCoins from '../services/requestApi';

// ACTION TYPES
const SEND_CURRENCIES = 'SEND_CURRENCIES';
const UPDATE_EXPENSES = 'UPDATE_EXPENSES';
const UPDATE_ID = 'UPDATE_ID';
const IS_EDIT = 'IS_EDIT';
const REQUEST_BEGIN = 'REQUEST_BEGIN';
const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
const REQUEST_FAILURE = 'REQUEST_FAILURE';

export const actionTypes = {
  SEND_CURRENCIES,
  UPDATE_EXPENSES,
  UPDATE_ID,
  IS_EDIT,
  REQUEST_BEGIN,
  REQUEST_SUCCESS,
  REQUEST_FAILURE,
};

// ACTION CREATORS
const sendCurrencies = (currencies) => ({ type: SEND_CURRENCIES, payload: currencies });
const updateExpenses = (expenses) => ({ type: UPDATE_EXPENSES, payload: expenses });
const updateId = () => ({ type: UPDATE_ID });
const isEdit = (payload) => ({ type: IS_EDIT, payload });

const requestBegin = () => ({ type: REQUEST_BEGIN }); // faz a requisicao a api
const requestSuccess = (data) => ({ type: REQUEST_SUCCESS, payload: data }); // em caso de sucesso pega os dados
const requestFailure = (error) => ({ type: REQUEST_FAILURE, payload: error }); // em caso de erro

// funcao q chama uma funcao q dispara uma acao -> retorno do fetch
// funcao async
const fetchCoins = () => async (dispatch) => {
  dispatch(requestBegin()); // requisicao a API

  try { // deu certo
    const coins = await getCoins(); // descarta a primeira posicao do array
    delete coins.USDT;
    dispatch(requestSuccess(coins));
  } catch (error) { // deu errado
    dispatch(requestFailure(error.message));
  }
};

export const actionCreators = {
  sendCurrencies,
  updateExpenses,
  updateId,
  isEdit,
  fetchCoins,
};
