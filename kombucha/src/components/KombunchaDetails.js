import React from 'react';
import PropTypes from 'prop-types';

function KombunchaDetails(props) {
    const {Kombuncha} = props;
    return (
        <React.Fragment>
            <h1>Kombuncha Details</h1>
            <h2>Kombuncha Brand:{Kombuncha.brand}</h2>
            <h2>Kombuncha Flavor:{Kombuncha.flavor}</h2>
            <h2>Kombuncha Price:{Kombuncha.price}</h2>
        </React.Fragment>
    )

}

KombunchaDetails.protoType = {
    Kombuncha: PropTypes.object
}


export default KombunchaDetails;