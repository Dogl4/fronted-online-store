import React from 'react';
import PropTypes from 'prop-types';

import trybeLogo from '../images/trybeLogo.png';

class Header extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <header
        className="d-flex
                    w-100
                    justify-content-around
                    align-items-center
                    shadow-sm
                    "
        style={ { backgroundColor: '#326c53', height: '80px' } }
      >
        <img
          src={ trybeLogo }
          alt="Logo da Trybe"
          className="mb-1"
          style={ { width: '70px' } }
        />
        { children }
      </header>
    );
  }
}

Header.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Header;
