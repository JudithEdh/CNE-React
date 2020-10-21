import React, {useState} from 'react';
import ChildComponent from './ChildComponent';

function State(){
    let [answer, setAnswer] = useState("Yes"); // string
    let [num, setNum] = useState(123); // number
    let [arr, setArr] = useState(["name","sav"]); //array
 
    return(
        <>
        <div>Is state important to know? {answer} </div>
        <p>what is the number: {num}</p>
        <p>what is in the arr: {arr}</p>
        
        <ChildComponent property={num}/>
        {/* sav to check syntax of printing an object */}
        </>
    );
}

export default State; 