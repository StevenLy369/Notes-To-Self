import React from 'react';
import PropTypes from 'prop-types';

function Kombuncha(props) {
    return (
        <React.Fragment>
            <h2>{props.brand}-{props.flavor}</h2>
            <h3>{props.price}</h3>
            
        </React.Fragment>
    )
}

Kombuncha.prototype = {
    brand: PropTypes.string.isRequired,
    flavor: PropTypes.string.isRequired,
    price: PropTypes.int.isRequired
}



export default Kombuncha;