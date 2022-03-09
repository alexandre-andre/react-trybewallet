import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Table.css';
import { array } from 'prop-types';

class Table extends Component {
  render() {
    const guides = [
      'Descrição',
      'Tag',
      'Método de pagamento',
      'Valor',
      'Moeda',
      'Câmbio utilizado',
      'Valor convertido',
      'Moeda de conversão',
      'Editar/Excluir',
    ];

    const { expenses } = this.props;
    // const td = expenses.map((item) => <td className="top" key={ item.id }>{ item.description }</td>);
    console.log(expenses.map((item) => item.tag));
    console.log(expenses.map(({ exchangeRates, currency }) => exchangeRates[currency].name));
    return (
      <table border="1" width="100%">
        <thead>
          <tr className="container_tr_table">
            {
              guides.map((item) => <th className="top" key={ item }>{ item }</th>)
            }
          </tr>
        </thead>
        <tbody>
          {
            expenses.map((item) => (
              <tr className="container_tr_table" key={ item.id }>
                <td className="top">{ item.description }</td>
                <td className="top">{ item.tag }</td>
                <td className="top">{ item.method }</td>
                <td className="top">{ (+item.value).toFixed(2) }</td>
                <td className="top">{ item.exchangeRates[item.currency].name }</td>
                <td className="top">{ item.exchangeRates[item.currency].ask }</td>
                <td className="top">{ (item.exchangeRates[item.currency].ask * item.value).toFixed(2) }</td>
                <td className="top">Real</td>
                <td className="top">
                  <button type="button">Editar</button>
                  <button type="button">Excluir</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});

export default connect(mapStateToProps)(Table);

Table.propTypes = {
  expenses: array,
}.isRequired;
