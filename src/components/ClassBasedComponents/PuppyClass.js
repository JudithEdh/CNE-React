import React,{Component} from 'react';
import Pup from './Pup';

class PuppyClass extends Component{
    render(){
        return(
            <div className="contacts">
                <Pup 
                    name="Jimmy Chew"
                    email="jimmy@hi.com"
                    savannah="https://placedog.net/400/200?id=5"
                    phone={2125552345}
                />
            </div>
        );
    }
}
export default PuppyClass;