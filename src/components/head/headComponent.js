import React from 'react';


export default class Head extends React.Component {
    
    render(){
        console.log(this.props);
        return (
            <div className="banner">
                <p> Hello From the Head Component</p>
            </div>
        );
    }
}