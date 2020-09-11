import React from 'react';
import KombunchaList from './KombunchaList';
import KombunchaForm from './KombunchaForm';
import KombunchaDetails from './KombunchaDetails';



class KombunchaControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            masterKombunchaList:[],
            selectedKombuncha: null
            
        }
    }

    handleClick = () => {
        if(this.state.selectedKombuncha !=null){
            this.setState({
                formVisibleOnPage:false,
                selectedKombuncha: null
            })

        }else{
            this.setState(prevState => ({
                formVisibleOnPage: !prevState.formVisibleOnPage,
            }))
        }
    }

    handleAddingNewKombuncha = (newKombuncha) => {
        const newMasterKombunchaList = this.state.masterKombunchaList.concat(newKombuncha);
        this.setState({
            masterKombunchaList: newMasterKombunchaList,
            formVisibleOnPage: false
        })
    }

    handleKombunchaDetails = (id) => {
        const selectedKombuncha = this.state.masterKombunchaList.filter(kombuncha => kombuncha.id === id)[0];
        this.setState({selectedKombuncha:selectedKombuncha})
    }

    render() {
        let currentlyvisibleState = null;
        let buttonText = null;

        if(this.state.selectedKombuncha !=null){
            currentlyvisibleState = <KombunchaDetails kombuncha = {this.state.selectedKombuncha} />
            buttonText = "Return to Kombuncha List"
        }

        else if (this.state.formVisibleOnPage) {
            currentlyvisibleState = <KombunchaForm onNewKombuncha = {this.handleAddingNewKombuncha} />
            buttonText = "Return to list"
        } else {
            currentlyvisibleState = <KombunchaList kombunchaList={this.state.masterKombunchaList}  onKombunchaSelection = {this.handleKombunchaDetails} />
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




