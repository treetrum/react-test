import React from 'react';
import PropTypes from 'prop-types';

const Actions = ({ addToCart, addingToCart, addedToCart }) => {

    let buttonText;

    if (addingToCart) {
        buttonText = "Loading..."
    }

    else if (addedToCart) {
        buttonText = "View Cart";
    }

    else {
        buttonText = "Add To Cart";
    }

    return (
        <footer className="actions">


            <div className="buttons">
                <button onClick={ addedToCart ? () => {} : addToCart } className="button-blue">
                    {buttonText}
                </button>
            </div>
            
            { addedToCart 
                ?
                    <p className="notice">Item added to cart!</p>
                :
                    ''
            }

        </footer>
    );
}

Actions.propTypes = {
    addToCart: PropTypes.func.isRequired,
    addingToCart: PropTypes.bool.isRequired,
    addedToCart: PropTypes.bool.isRequired
}

export default Actions;