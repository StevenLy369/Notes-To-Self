import React from 'react';


function Kombuncha(props) {
    return (
        <React.Fragment>
            <hr />
            <h2>Kombuncha Brand:{props.brand}</h2>
            <h2>Kombuncha Flavor:{props.flavor}</h2>
            <h2>Kombuncha Price:{props.price}</h2>

            
        </React.Fragment>
    )
}



export default Kombuncha;