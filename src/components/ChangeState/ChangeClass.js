import React from 'react';

class ChangeMe extends React.Component{
    constructor(){
        super();
        this.state={
            count:0
        }
        this.handleClick = this.handleClick.bind(this); // it makes sure that the handleClick() is bound to the context of `this` as it exists within this class. - don't worry too much about it
    }

    handleClick(){
        console.log("It's working");   
        this.setState(function(previousState){
            return { count: previousState.count + 1}
        }); // we want to know what the previous state was and add 1 to it

    }

    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!</button> 
                {/* When the method is part of my class I need to reference the `this` object */}
            </div>
        )
    }
}

//1. When you click the button something gets logged
export default ChangeMe;