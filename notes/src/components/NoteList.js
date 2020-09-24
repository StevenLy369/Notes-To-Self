import React from 'react';
import Note from './Note'
import PropTypes from 'prop-types';




function NoteList(props) {

    return(
        <React.Fragment>
            {props.noteList.map((note, index) => 
                <Note note={note.note}
                      date={note.date}
                      key={index} />


            )}
             

        </React.Fragment>
       
        
    )
}

NoteList.propTypes = {
    noteList: PropTypes.array
}

export default NoteList