import React from 'react';
import {v4} from 'uuid';
import PropTypes from 'prop-types';



function Form(props){

    function handleNewKombuncha(event){
        event.preventDefault();
        props.onNewKombuncha({
            brand:event.target.brand.value,
            price:event.target.price.value,
            flavor:event.target.flavor.value,
        id:v4()})
    }

    return (
        <React.Fragment>
            <form onSubmit = {handleNewKombuncha}>
                <input
                    type="text"
                    name="brand"
                    placeholder="brand" />

                <input
                    type="text"
                    name="flavor"
                    placeholder="flavor" />
                
                <input
                    type="text"
                    name="price"
                    placeholder="price" />

                    <button type="submit">Submit</button>


            </form>
        </React.Fragment>
    )
}

Form.protoType = {
    onNewKombuncha: PropTypes.func
}




export default Form;