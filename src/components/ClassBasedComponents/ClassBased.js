import React,{Component} from 'react';

// // Function based component
// function FunctionName() {
//     return(
//         <div>
//             <p>Something is here</p>
//         </div>
//     );
// }

// 1. Extend React.Component / or De-construct in line 1 
// 2. ALWAYS include a render(){} method with return(<> </>) placed inside
class ClassName extends Component{
    render(){
        return(
                <div>
                    <p>Something is here</p>
                </div>
        );
    }
}

export default ClassName;