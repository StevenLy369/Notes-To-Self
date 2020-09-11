import React from 'react';
import PropTypes from 'prop-types';

function KombunchaDetails(props) {
    return (
        <React.Fragment>
            <h1>Kombuncha Details</h1>
            <h2>Kombuncha Brand:{props.brand}</h2>
            <h2>Kombuncha Flavor:{props.flavor}</h2>
            <h2>Kombuncha Price:{props.price}</h2>
        </React.Fragment>
    )

}

KombunchaDetails.protoType = {
    Kombuncha: PropTypes.object
}


export default KombunchaDetails;