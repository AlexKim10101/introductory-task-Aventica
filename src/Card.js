import React from 'react';

class Card extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
   			visibleInput: false,
   			text:this.props.text,
        }
        this.changeVisibleInput = this.changeVisibleInput.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.pushChanges = this.pushChanges.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);

    }

    changeVisibleInput(){
    	this.setState({
    		visibleInput: true,
    	})
    	
    }

    pushChanges(event){
    	this.props.changeText(this.props.id, this.state.text);
    	this.setState({
    		visibleInput: false,
    	})
    }

    handleChange(event){
    	this.setState({
    		text: event.target.value,
    	})
    }
	
	handleKeyPress(event){
		if (event.key === 'Enter') {
      		this.props.changeText(this.props.id, this.state.text);
    			this.setState({
    			visibleInput: false,
    		})
    	}
	}

    render(){
    	
		let indicatorClassName = this.props.status=='red' ? 'indicator indicator--red' : 'indicator indicator--green';
    	
    	if(this.props.location == 'Save'){
    		
    		return(
	    		<div className="card card--clean">
	    			<div className={indicatorClassName}></div>
	    			<p className="card__text">{this.props.text}</p>
	    			<input className="button button--toDraft" type="button" value="Draft" onClick={this.props.moveToDraft}></input>   			
	    			<input className="button button--mark" type="button" value="Mark" onClick={this.props.changeIndicatorColor}></input> 
	    		</div>
	    	)
    	}

    	if(this.props.location == 'Draft'){
    		return(
	    		<div className="card card--draft">
	    			{
	    				this.state.visibleInput ? 
		    				<input 
		    					type="text" 
		    					value={this.state.text} 
		    					onBlur={this.pushChanges} 
		    					onChange={this.handleChange}
		    					onKeyPress={this.handleKeyPress}>
		    				</input> : 
		    				<p className="card__text" 
		    					onClick={this.changeVisibleInput}>
		    					{this.props.text}
		    				</p>
	    			}
	    			<input 
		    			className="button button--remove" 
		    			type="button" 
		    			value="Remove" 
		    			onClick={this.props.removeCard}>
	    			</input>   			
	    			<input 
		    			className="button button--save" 
		    			type="button" 
		    			value="Save" 
		    			onClick={this.props.moveToClean}>
	    			</input> 
	    		</div>
	    	)
    	}
    }

}

export default Card;