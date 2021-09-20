import React from 'react';
import PropTypes from 'prop-types';
import FadeIn from 'react-fade-in';
import { Card } from 'react-bootstrap';
import AddToCartButton from './AddToCartButton';

export default function ProductDetailCard(props) {
  const { product, homeIs } = props;
  const { title, price, thumbnail, attributes } = product;
  return (
    <FadeIn transitionDuration="1000">
      <main style={ { width: '80%' } } className="d-flex flex-column m-auto mt-3">
        <Card className="d-flex flex-row border-bottom-0 w-100 p-3">
          <Card.Img
            style={ { width: '300px', height: '300px' } }
            className="img-thumbnail m-auto"
            variant="top"
            src={ thumbnail }
          />
          <Card.Body className="m-3">
            <h4 data-testid="product-detail-name">{ title }</h4>
            <Card.Text>
              { attributes.map((att) => (
                <li key={ att.id }>
                  { `${att.name}: ${att.value_name}`}
                </li>
              ))}
            </Card.Text>
            <AddToCartButton product={ product } homeIs={ homeIs } />
          </Card.Body>
        </Card>
        <Card.Footer>
          <h5 className="text-muted">{ `R$ ${price}` }</h5>
          { product.shipping.free_shipping
              && (<p data-testid="free-shipping">Frete Grátis</p>) }
        </Card.Footer>
      </main>
    </FadeIn>
  );
}

ProductDetailCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    attributes: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      value_name: PropTypes.string.isRequired,
    })).isRequired,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
  homeIs: PropTypes.bool.isRequired,
};
