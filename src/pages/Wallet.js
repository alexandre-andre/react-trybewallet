import React from 'react';
import { connect } from 'react-redux';
import { array, bool, number, object } from 'prop-types';
import Table from '../componenens/Table';
import Header from '../componenens/Header';
import { actionCreators } from '../actions/walletActions';

const metodosDePagamento = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
const defaultState = {
  value: 0,
  currency: 'USD',
  method: metodosDePagamento[0],
  tag: tags[0],
  description: '',
};

class Wallet extends React.Component {
  state = { ...defaultState };

  componentDidMount() { // faz chamada d requisicao e monta o comp pela primeia vez
    const { dispatch } = this.props;
    dispatch(actionCreators.fetchCoins()); // preco qdo entra na pagina
  }

  handleChange = ({ target }) => {
    const { id, value } = target;
    this.setState({ [id]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, expenses, allCoins, id } = this.props;
    dispatch(actionCreators.fetchCoins()); // se demorar pra comprar se lasca todim, o preco muda
    dispatch(actionCreators.updateId()); // atualiza o iod antes de jogar no obj
    const currencyExpense = { id, ...this.state, exchangeRates: allCoins };
    dispatch(actionCreators.updateExpenses([...expenses, currencyExpense]));
    this.setState({ ...defaultState });
  }

  saveEditedExpense = () => {
    const { dispatch, expenses, editing } = this.props;
    const arrayWithEditedExpense = expenses.map(
      (expense) => (expense === editing ? { ...expense, ...this.state } : expense),
    );
    dispatch(actionCreators.updateExpenses([...arrayWithEditedExpense]));
    this.setState({ ...defaultState });
  }

  render() {
    const { currencies, isLoading, isEdit } = this.props; // prop de coinsReducers
    const { value, description } = this.state;

    if (isLoading) return <h1>Carregando ...</h1>;
    return (
      <div>
        <div>
          <Header />
          <form
            className="container_choice align_center_around"
          >
            <label htmlFor="value">
              Valor:
              <input
                id="value"
                type="number"
                data-testid="value-input"
                min="0"
                value={ value }
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="currency">
              Moeda:
              <select
                id="currency"
                data-testid="currency-input"
                onChange={ this.handleChange }
              >
                {
                  currencies.map((currencie) => (
                    <option key={ currencie } value={ currencie }>{ currencie }</option>
                  ))
                }
              </select>
            </label>
            <label htmlFor="method">
              Método de Pagamento:
              <select
                id="method"
                data-testid="method-input"
                onChange={ this.handleChange }
              >
                {
                  metodosDePagamento.map((metodo) => (
                    <option
                      key={ metodo }
                      value={ metodo }
                    >
                      { metodo }
                    </option>
                  ))
                }
              </select>
            </label>
            <label htmlFor="tag">
              Tag:
              <select id="tag" data-testid="tag-input" onChange={ this.handleChange }>
                {
                  tags.map((element) => (
                    <option
                      key={ element }
                      value={ element }
                    >
                      { element }
                    </option>
                  ))
                }
              </select>
            </label>
            <label htmlFor="description">
              Descrição:
              <input
                id="description"
                type="text"
                data-testid="description-input"
                value={ description }
                onChange={ this.handleChange }
              />
            </label>
            <button
              onClick={
                isEdit ? () => this.saveEditedExpense() : (e) => this.handleSubmit(e)
              }
              type="button"
            >
              { isEdit ? 'Editar despesa' : 'Adicionar despesa' }
            </button>
          </form>
          <Table />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ wallet:
  { currencies, allCoins, isLoading, id, expenses, isEdit, editing } }) => ({
  allCoins,
  currencies,
  isLoading,
  id,
  expenses,
  isEdit,
  editing,
});

export default connect(mapStateToProps, null)(Wallet);

Wallet.propTypes = {
  allCoins: object,
  currencies: array,
  isLoading: bool,
  id: number,
  expenses: array,
  isEdit: bool,
  editing: object,
}.isRequired;
