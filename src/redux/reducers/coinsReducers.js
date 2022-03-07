import { actionTypes } from '../actions/coinsActions';

const INITIAL_STATE = {
  isLoagind: false,
  coins: {},
  siglas: [],
  errorMessage: '',
};

function coins(state = INITIAL_STATE, action) {
  switch (action.type) {
  case actionTypes.REQUEST_BEGIN: // inicio da requisicao
    return {
      ...state,
      isLoagind: true,
    };
  case actionTypes.REQUEST_SUCCESS: // requisicao ok
    return {
      ...state,
      isLoagind: false,
      coins: action.payload, //
      siglas: Object.keys(action.payload), //
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
}

export default coins;
