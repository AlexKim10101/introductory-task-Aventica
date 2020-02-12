import React from 'react';
import Main from './Main';

class App extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="app grid">
               <Main />
            </div>
        );
    }
}

export default App;
