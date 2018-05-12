import React from 'react';

const ProdcutImage = ({ imageName }) => {
    return (
        <div className="product-image">
            <img src={`../../client/resources/images/${imageName}`} />
        </div>
    )
}

export default ProdcutImage;