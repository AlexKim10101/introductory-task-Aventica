import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <header className="header">
                <h1 className="header__title">
                    React app for <span className="client-name">Aventica</span>
                </h1>
                <div className="counter">{this.props.goodCards}</div>
            </header>
        )
    }
}


export default Header;