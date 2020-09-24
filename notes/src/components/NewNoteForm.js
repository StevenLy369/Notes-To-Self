import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';




function NewTicketForm(props){

    function handleNewTicketFormSubmission(event) {
        event.preventDefault();
        props.onNewNoteCreation({
            note: event.target.note.value, 
            date: event.target.date.value, 
            id: v4()
        });
        
      }
    

    

    

    return (
        <React.Fragment>
            <form onSubmit ={handleNewTicketFormSubmission}>
                <label>Note:</label>
                <input type = "text" name="note" />
                <label>Date</label>
                <input type = "text" name ="date" />
                

                <button type="submit">Submit</button>

            </form>





        </React.Fragment>
    )
}

NewTicketForm.prototype = {
    handleNewTicketFormSubmission: PropTypes.func,
    onNewNoteCreation:PropTypes.func
};

export default NewTicketForm;