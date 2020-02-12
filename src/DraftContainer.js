
import React from 'react';
import Card from './Card';

class DraftContainer extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
   			
        }
        
    }

    renderGalleryItems = () =>{
    	let list = null;
    	let removeCard = this.props.removeCard;
    	let moveToClean = this.props.moveToClean;
    	let changeText = this.props.changeText;
    	list = this.props.gallery.map(function(item, index){
    		if(item.location=="Draft"){
    			return <Card 
    				status={item.status} 
    				text={item.text} 
    				location={item.location} 
    				key={index} 
    				id={index} 
    				removeCard={()=>removeCard(index)}
    				moveToClean={()=>moveToClean(index)}
    				changeText={changeText}/>
    		}
    		
    		}
    	);
    	return list;
    }
    render(){
    	return(
    		<section className="draft-container">	   				
   				<h2 className="draft-container__header">Draft</h2>
   				<ul className="draft-list">
   					{this.renderGalleryItems()}
   				</ul>
   			</section>
    	)
    }
}

export default DraftContainer;
