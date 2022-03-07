import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Divisions from '../componenens/Divisions';
import Header from '../componenens/Header';
import { actionCreators } from '../redux/actions/coinsActions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      valor: 0,
      moeda: '',
      metodoDePagamento: '',
      tag: '',
      descricao: '',
    };
  }

  componentDidMount() { // faz chamada d requisicao e monta o comp pela primeia vez
    const { dispatch } = this.props;
    dispatch(actionCreators.fetchCoins());
  }

  handleChange = ({ target: { id, value } }) => {
    // const { id, value } = target;
    console.log({ [id]: value });
    this.setState({ [id]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // const { dispatch } = this.props;
    // dispatch(actionCreators)
  }

  render() {
    const { siglas, isLoading } = this.props; // prop de coinsReducers
    const { valor, moeda, metodoDePagamento, tag, descricao } = this.state;
    const metodosDePagamento = ['Dinheiro', 'Cartão de Crédito', 'Cartão de Débito'];
    const tags = ['Alimentacao', 'Lazer', 'Trabalho', 'Transporte', 'Saúde '];

    const paymentOptions = metodosDePagamento.map((item) => (
      <option
        key={ item }
        value={ metodoDePagamento }
        onChange={ this.handleChange }
      >
        { item }

      </option>
    ));

    const tagsOptions = tags.map((item) => (
      <option
        key={ item }
        value={ tag }
        onChange={ this.handleChange }
      >
        { item }

      </option>
    ));

    const moedas = siglas.map((item) => (
      <option key={ item } value={ moeda }>{ item }</option>
    ));

    if (isLoading) return <h1>Carregando ...</h1>;
    return (
      <div>
        <div>
          <Header />
          <form onSubmit={ (e) => this.handleSubmit(e) } className="container_choice align_center_around">
            <label htmlFor="valor">
              Valor
              <input
                id="valor"
                type="number"
                value={ valor }
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="moeda">
              Moeda
              <select id="moeda">{ moedas }</select>
            </label>
            <label htmlFor="metodo_de_pagamento">
              Método de Pagamento
              <select id="metodo_de_pagamento">{ paymentOptions }</select>
            </label>
            <label htmlFor="tag">
              Tag
              <select id="tag">{ tagsOptions }</select>
            </label>
            <label htmlFor="descricao">
              Descrição
              <input
                id="descricao"
                type="text"
                value={ descricao }
                onChange={ this.handleChange }
              />
            </label>
            <button type="button">
              Adicionar Despesa
            </button>
          </form>
          <Divisions />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ coins: { siglas, isLoading } }) => ({
  siglas,
  isLoading,
});

export default connect(mapStateToProps, null)(Wallet);

Wallet.propTypes = {
  siglas: PropTypes.array,
  isLoading: PropTypes.bool,
}.isRequired;
