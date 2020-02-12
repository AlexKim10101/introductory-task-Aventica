
import React from 'react';
import Card from './Card';

class CleanContainer extends React.Component {

constructor(props) {
    super(props);
}

renderGalleryItems = ()=>{
    let list = null;
    let changeIndicatorColor = this.props.changeIndicatorColor;
    let moveToDraft = this.props.moveToDraft;
    list = this.props.gallery.map(function(item, index){
        if(item.location == "Save"){
            return <Card 
                status={item.status} 
                text={item.text} 
                location={item.location} 
                key={index} 
                id={index}
                changeIndicatorColor={()=>changeIndicatorColor(index)}
                moveToDraft={()=>moveToDraft(index)}/>
        }

        }
    );
    return list;
}


render(){
    return(
        <section className="clean-container">	   				
    		<h2 className="visually-hidden">Clean</h2>
        		<ul className="clean-list">
        		{this.renderGalleryItems()}
    		</ul>
	    </section>
        )
    }
}

export default CleanContainer;



