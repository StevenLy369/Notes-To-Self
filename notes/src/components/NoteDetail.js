import React from 'react';
import PropTypes from 'prop-types';

function NoteDetail(props){
    const {note} = props;



    return(
       <React.Fragment>
           <h1>Note Detail Page</h1>
           <h2>Notes: {note.note}</h2>
           <h4>Date:{note.date}</h4>
           <h1>THIS WORKS</h1>
       </React.Fragment>
       
    )

}

NoteDetail.propTypes = {
    note: PropTypes.object,
}



export default NoteDetail;