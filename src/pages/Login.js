import React from 'react';
import './Login.css';
import { connect } from 'react-redux';
import { object } from 'prop-types';
import validator from 'validator'; // biblioteca de validacao
import { actionCreators } from '../redux/actions/userActions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };
  }

  handleChange = ({ target: { name, value } }) => { // pah
    this.setState({ [name]: value }, this.validLoginButton); // seta name-value dinamicamente e chama uma funcao
  }

  validLoginButton = () => {
    const { email, password } = this.state; // pega os inputs em tempo real
    const isValidEmail = validator.isEmail(email); // verifica se o state eh um email valido
    const minLength = 6;

    if (isValidEmail && password.length >= minLength) {
      this.setState({ isDisabled: false }); // se pah
    } else {
      this.setState({ isDisabled: true });
    }
  }

  handleSubmit = (e, email) => {
    const { dispatch, history } = this.props;
    e.preventDefault();
    dispatch(actionCreators.sendUserLogin(email)); // dispara acao de enviar login do usuario
    history.push('/carteira'); // apos o dispatch entra nn rota /carteira
  }

  render() {
    const { isDisabled, email, password } = this.state;

    return (
      <div className="container_login">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-YjkIXR-arrSQ-qTvJCRLNb6CUpUyl9hlQ&usqp=CAU"
          alt="myWallet"
        />
        <form className="form_login">
          <input
            className="input_login"
            name="email"
            type="email"
            data-testid="email-input"
            placeholder="email"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            className="input_login"
            name="password"
            type="password"
            data-testid="password-input"
            placeholder="password"
            value={ password }
            onChange={ this.handleChange }
          />
          <button
            className="button_entrar"
            onClick={ (e) => this.handleSubmit(e, email) }
            type="button"
            disabled={ isDisabled }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(Login);

Login.propTypes = {
  history: object,
}.isRequired;
