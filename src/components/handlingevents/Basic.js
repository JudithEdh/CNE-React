import React from 'react';

function Basic(){
    return(
        <div>
            <img src="https://www.fillmurray.com/200/100" onMouseOver={()=>{alert("Hi")}}/>
            <br/>
            <br/>
            <br/>
            {/* <button onclick="myfunction()">Click me</button> HTML */}
            <button onClick={myfunction}>Click me</button>
        </div>
    )
}

function myfunction(){
    alert("Did you call me?");
}

export default Basic;