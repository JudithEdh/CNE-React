import React from 'react';

function ChildComponent(props){
    return(
        <>
        <p>This value is in the child component, but I took it from my parent {props.property}</p>
        </>
    );
}
export default ChildComponent;