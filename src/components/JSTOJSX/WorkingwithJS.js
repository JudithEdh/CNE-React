import React from 'react'; 

import Poke from './poke.json';
const WorkingWithData = () => {

const person = { 
    firstName: "Savannah",
    lastName:"Vaithilingam", 
    city:"Daventry",
    country:"UK"
};

console.log(Poke);


return(
    <>
        <p>Return info here</p>
        <p>{person.firstName}</p>
        <p>{Poke.name}</p>
    </>
)



}

export default WorkingWithData; 