import React from 'react';
import KombunchaList from './KombunchaList';
import KombunchaForm from './KombunchaForm';
import KombunchaDetails from './KombunchaDetails';



class KombunchaControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            masterKombunchaList:[]
            
        }
    }

    handleClick = () => {
        this.setState(prevState => ({
            formVisibleOnPage: !prevState.formVisibleOnPage
        }))
    }

    handleAddingNewKombuncha = (newKombuncha) => {
        const newMasterKombunchaList = this.state.masterKombunchaList.concat(newKombuncha);
        this.setState({
            masterKombunchaList: newMasterKombunchaList,
            formVisibleOnPage: false
        })
    }



    render() {
        let currentlyvisibleState = null;
        let buttonText = null;

        if (this.state.formVisibleOnPage) {
            currentlyvisibleState = <KombunchaForm onNewKombuncha = {this.handleAddingNewKombuncha} />
            buttonText = "Return to list"
        } else {
            currentlyvisibleState = <KombunchaList kombunchaList={this.state.masterKombunchaList} />
            buttonText = "Add new Kombuncha"

        }
        return(
            <React.Fragment>
                {currentlyvisibleState}
                <button onClick={this.handleClick}>{buttonText}</button>
            </React.Fragment>

        ) 
            
        
    }
    }
export default KombunchaControl;




