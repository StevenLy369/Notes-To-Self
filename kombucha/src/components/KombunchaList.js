import React from 'react';
import Kombuncha from './Kombuncha'
import PropTypes from "prop-types"

function KombunchaList(props) {
    return (
        <React.Fragment>
            {props.kombunchaList.map((kombuncha,index) =>
            <Kombuncha 
                brand = {kombuncha.brand}
                price = {kombuncha.price}
                flavor = {kombuncha.flavor}
                key ={index} />
                
                
                
                )} 


        </React.Fragment>
    )


}
KombunchaList.propTypes = {
    kombunchaList: PropTypes.array
}


export default KombunchaList;