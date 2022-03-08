import React from 'react';
import { connect } from 'react-redux';
import { arrayOf, object, string } from 'prop-types';
import './Header.css';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const expense = expenses.length ? expenses.reduce((acc, { value, currency,
      exchangeRates: { [currency]: { ask } } }) => {
      acc += +value * +ask;
      return acc;
    }, 0) : 0;

    // const formatedExpenseToBRL = expense.toLocaleString(
    //   'pt-br', { style: 'currency', currency: 'BRL' },
    // );

    return (
      <header className="header">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-YjkIXR-arrSQ-qTvJCRLNb6CUpUyl9hlQ&usqp=CAU"
          alt="myWallet"
        />
        <h4 data-testid="email-field">
          { `Email: ${email}` }
        </h4>
        <h4 data-testid="total-field">
          { `Despesa Total: R$ ${expense.toFixed(2) || 0} `}
          <span data-testid="header-currency-field">
            BRL
          </span>
        </h4>
      </header>
    );
  }
}

const mapStateToProps = ({ user: { email }, wallet: { expenses } }) => ({
  email,
  expenses,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: string,
  expenses: arrayOf(object),
}.isRequired;
