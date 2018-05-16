import React from 'react';
import PropTypes from 'prop-types';

const pathToImages = require.context('../images/', true);

const ProdcutImage = ({ imageName }) => {    

    const imagePath = pathToImages(`./${imageName}`, true);

    return (
        <div className="product-image">
            <img src={imagePath} />
        </div>
    )
}

ProdcutImage.propTypes = {
    imageName: PropTypes.string.isRequired
}

export default ProdcutImage;