import React, { Component } from 'react';
import './Table.css';

export default class Table extends Component {
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

    return (
      <table border="1" width="100%">
        <thead>
          <tr className="container_tr_table">
            {
              guides.map((item) => <th className="top" key={ item }>{ item }</th>)
            }
          </tr>
        </thead>
      </table>
    );
  }
}
