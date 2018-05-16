import React from 'react';

const pathToImages = require.context('../images/', true);

const ProdcutImage = ({ imageName }) => {    

    const imagePath = pathToImages(`./${imageName}`, true);

    return (
        <div className="product-image">
            <img src={imagePath} />
        </div>
    )
}

export default ProdcutImage;