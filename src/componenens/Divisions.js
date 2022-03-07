import React, { Component } from 'react';
import './Divisions.css';

export default class Divisions extends Component {
  render() {
    const guides = [
      'Descrição',
      'Tag',
      'Método de Pagamento',
      'Valor',
      'Moeda',
      'Cabio utilizado',
      'Valor Convertido',
      'Moeda de conversão',
      'Editar/Exlcuir',
    ];

    return (
      <div className="container_guides align_center_between">
        {
          guides.map((item) => <p key={ item }>{ item }</p>)
        }
      </div>
    );
  }
}
