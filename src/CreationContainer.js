
import React from 'react';

class CreationContainer extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
   			text:'Text',
        }
        this.handleChange = this.handleChange.bind(this);
    	this.createCard = this.createCard.bind(this);
    }

    handleChange(event) {
	    this.setState({text: event.target.value});
	}

	createCard(event){
		if(event.target.value == "Draft"){
			this.props.addCard({
				location:event.target.value,
				text:this.state.text,
				status:'red',
			});
		}
		if(event.target.value == "Save"){
			this.props.addCard({
				location:event.target.value,
				text:this.state.text,
				status:'green',
			});
		}	
	}

    render(){
    	return(
    		<section className="creation-container">	   			
				<h2 className="visually-hidden">Форма создания карточек</h2>
			   	
			   	<input 
				   	className="creation-input creation-input--text" 
				   	type="text" 
				   	value={this.state.text} 
				   	onChange={this.handleChange}>
				</input>

			   	<input 
				   	className="creation-input creation-input--draft" 
				   	type="submit" 
				   	value="Draft" 
				   	onClick={this.createCard}>
				</input>

			   	<input 
				   	className="creation-input creation-input--save" 
				   	type="submit" 
				   	value="Save" 
				   	onClick={this.createCard}>
				</input>		 	
			</section>
    	)
    }
}

export default CreationContainer;
