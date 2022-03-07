import React from 'react';
import { connect } from 'react-redux';
import { arrayOf, object, string } from 'prop-types';
import './Header.css';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;

    return (
      <header className="header">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-YjkIXR-arrSQ-qTvJCRLNb6CUpUyl9hlQ&usqp=CAU"
          alt="myWallet"
        />
        <span>
          { `Email: ${email}` }
        </span>
        <span>
          { `Despesa Total: R$ ${expenses} BRL`}
        </span>
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
