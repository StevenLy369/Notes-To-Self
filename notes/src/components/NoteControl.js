import React from 'react';
import NewNoteForm from './NewNoteForm'
import NoteList from './NoteList';
import Header from './Header'
import NoteDetail from './NoteDetails'


class NoteControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            masterNoteList:[],
            selectedNote:null
        }

    }

    handleClick = () => {
        this.setState(prevState => ({
          formVisibleOnPage: !prevState.formVisibleOnPage
        }));
      }

    
      handleAddingNewNoteToList = (newNote) => {
        const newMasterNoteList = this.state.masterNoteList.concat(newNote);
        this.setState({masterNoteList:newMasterNoteList,
        formVisibleOnPage:false})
      }

      handleChangingSelectedNote = (id) => {
        const selectedNote = this.state.masterNoteList.filter(note => note.id === id)[0];
        this.setState({selectedNote:selectedNote});
        console.log("this is working");
      }


    render(){
        let currentlyVisibleState = null;
        let buttonText = null
        
        if(this.state.selectedNote != null){
            currentlyVisibleState = <NoteDetail note = {this.state.selectedNote} />
            buttonText = "Return to Note List"

        }else if(this.state.formVisibleOnPage) {
            currentlyVisibleState = <NewNoteForm onNewNoteCreation = {this.handleAddingNewNoteToList} />
            buttonText = "Return to Note List"
        }else {
          currentlyVisibleState = <NoteList noteList = {this.state.masterNoteList}  onclickingNote = {this.handleChangingSelectedNote}/>
          buttonText = "Add New Note"
        }   
      return(
        <React.Fragment>
            <Header/>
            {currentlyVisibleState}
            <button onClick ={this.handleClick}>{buttonText}</button>
            
        </React.Fragment>
      )




    }
}




export default NoteControl;