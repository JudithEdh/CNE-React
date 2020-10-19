import React from 'react';

const Convert = () => {
    // ex 1
    const firstName="Savannah"; 
    const lastName="Vaith";
    // ex 2
    const date = new Date(); 
    // ex3
    
    let hours = date.getHours();
    let timeOfDay; 

    if(hours< 12){
        timeOfDay = "Good morning";
    }else if(hours>=12 && hours <17){
        timeOfDay = "Good Afternoon"
    }else{
        timeOfDay="Good night"
    }

    return(
        <div>
        <h1> Hello {`${firstName} ${lastName}`}</h1>
        <p> The time is {date.getHours()%12} o'clock</p>
        <p>{timeOfDay}</p>
        </div>
    );
  
}

// function Convert() {}
export default Convert; 