import React from 'react';

const Variations = ({ colours, changeColour, currentColourIndex}) => {
    return (
        <section className="variations">
            <label htmlFor="colors">Colors</label>
            <select name="colors" id="colors" onChange={changeColour} value={currentColourIndex} >
                { colours.map( (colour, index) => 
                    <option value={index} key={index} >{colour.name}</option>
                )}
            </select>
        </section>
    );
}

export default Variations;