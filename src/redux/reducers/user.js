// Esse reducer será responsável por tratar as informações da pessoa usuária
import { actionTypes } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case actionTypes.SEND_USER_LOGIN:
    return { ...state, email: action.payload }; // na chave email guarda o action.payload do actionCreator
  default:
    return state;
  }
};

export default user;
