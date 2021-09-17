import React from 'react';
import PropTypes from 'prop-types';

class Category extends React.Component {
  render() {
    const { title, id, onChange } = this.props;
    return (
      <label data-testid="category" htmlFor={ id }>
        { title }
        <input
          type="radio"
          name="category"
          onChange={ onChange }
          id={ id }
          value={ id }
        />
      </label>
    );
  }
}

Category.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Category;
