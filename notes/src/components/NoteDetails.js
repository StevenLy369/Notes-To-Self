import React from 'react';
import PropTypes from 'prop-types';

function NoteDetails(props){
    const {note} = props;



    return(
       <React.Fragment>
           <h1>Note Details</h1>
           <h2>Notes: {note.note}</h2>
           <h4>Date:{note.date}</h4>
       </React.Fragment>
       
    )

}

NoteDetails.propTypes = {
    note: PropTypes.object
}



export default NoteDetails;