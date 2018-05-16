import React from 'react';
import PropTypes from 'prop-types';

const Variations = ({ colours, changeColour, currentColour}) => {
    return (
        <section className="variations">
            <label htmlFor="colors">Colors</label>
            <select name="colors" id="colors" onChange={changeColour} value={currentColour} >
                { Object.keys(colours).map( key => 
                    <option value={key} key={key} >
                        {colours[key].name}
                    </option> 
                )}
            </select>
        </section>
    );
}

Variations.propTypes = {
    colours: PropTypes.object.isRequired,
    changeColour: PropTypes.func.isRequired,
    currentColour: PropTypes.string.isRequired
}

export default Variations;