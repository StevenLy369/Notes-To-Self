import React from 'react';
import PropTypes from 'prop-types';

function KombunchaDetails(props) {
    const {kombuncha} = props;
    return (
        <React.Fragment>
            <h1>Kombuncha Details</h1>
            <h2>Kombuncha Brand:{kombuncha.brand}</h2>
            <h2>Kombuncha Flavor:{kombuncha.flavor}</h2>
            <h2>Kombuncha Price:{kombuncha.price}</h2>
        </React.Fragment>
    )

}

KombunchaDetails.protoType = {
    Kombuncha: PropTypes.object
}


export default KombunchaDetails;