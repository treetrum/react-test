import React from 'react';

const Variations = ({ colours, changeColour, currentColour}) => {
    return (
        <section className="variations">
            <label htmlFor="colors">Colors</label>
            <select name="colors" id="colors" onChange={changeColour} value={currentColour} >
                { Object.keys(colours).map((key, index) => 
                    <option value={key} key={key} >
                        {colours[key].name}
                    </option> 
                )}
            </select>
        </section>
    );
}

export default Variations;