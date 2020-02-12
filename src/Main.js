import React from 'react';
import Header from './Header';
import CreationContainer from './CreationContainer';
import DraftContainer from './DraftContainer';
import CleanContainer from './CleanContainer';


class Main extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
   			gallery:[],
   			
        }
    	this.addCard = this.addCard.bind(this);
    	this.removeCard = this.removeCard.bind(this);
    	this.moveToClean = this.moveToClean.bind(this);
    	this.moveToDraft = this.moveToDraft.bind(this);
    	this.changeText = this.changeText.bind(this);
    	this.changeIndicatorColor = this.changeIndicatorColor.bind(this);
    }

    
	addCard(event){	
		let result = this.state.gallery.slice();
		result.push(event);
		this.setState({
			gallery: result,
		})
	}

	removeCard(index){
		let result = this.state.gallery.slice();
		result.splice(index, 1);
		this.setState({
			gallery:result,
		})
	}

	moveToClean(index){
		let result = this.state.gallery.slice();
		let item = Object.assign({}, result[index]);
		item.location = "Save";
		item.status = "green";
		result.splice(index, 1);
		result.push(item);	
		this.setState({
			gallery:result,
		})
	}

	moveToDraft(index){
		let result = this.state.gallery.slice();
		let item = Object.assign({}, result[index]);
		item.location = "Draft";
		item.status = "red";
		result.splice(index, 1);
		result.push(item);
		this.setState({
			gallery:result,
		})
	}

	changeIndicatorColor(index){
		let result = this.state.gallery.slice();
		let item = result[index];
		item.status = item.status=='green'? 'red':'green';		
		this.setState({
			gallery:result,
		})

	}

	changeText(index, newText){
		let result = this.state.gallery.slice();
		let item = result[index];
		item.text = newText;		
		this.setState({
			gallery:result,
		})

	}

    render() {
    	let copyGallery = this.state.gallery.slice();
    	let goodCards = copyGallery.reduce(function(sum, current) {
    		let i = current.status == 'green' ? 1 : 0;
  			return sum + i;
		}, 0);
    	return(
    		<React.Fragment>
    			<Header goodCards={goodCards}/>
	   			
	   			<CreationContainer addCard={this.addCard}/>

	   			<DraftContainer gallery={copyGallery} 
		   			removeCard={this.removeCard} 
		   			moveToClean={this.moveToClean} 
		   			changeText={this.changeText}/>
	   		
	   			<CleanContainer 
		   			gallery={copyGallery} 
		   			changeIndicatorColor={this.changeIndicatorColor} 
		   			moveToDraft={this.moveToDraft}/>
 		
	   		</React.Fragment>
    	)
   		
    }
}


export default Main;


