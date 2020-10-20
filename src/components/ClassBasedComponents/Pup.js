import React,{Component} from 'react';

class Pup extends Component{

    //`this` - refrences scope

    render(){
        console.log(this);
        console.log(this.props);
        console.log(this.props.savannah);
        return(
            <div className="contact-card">
                <img src={this.props.savannah}/>
                <h3></h3>
                <p></p>
                <p></p>
            </div>
        )
    }
}
export default Pup;