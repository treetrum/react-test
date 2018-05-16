import React from 'react';

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

export default Actions;