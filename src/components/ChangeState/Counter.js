import React, {useState, useEffect} from 'react';

function Counter(){
    let [count, setCount] = useState(0);

    function increment(){
        // console.log("I was pressed");
        // setCount(count+1); // Don't do this because you don't want to alter the original version of your state
        setCount(function(prevState){
            return prevState+1;
        });
    }

    useEffect(()=>{
        // replace the title of the page
        document.title = `Clicked ${count} times`;
        return( () => console.log(`Final: ${count}`));
    });
    
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Change me!</button>
        </div>
    );
}

export default Counter; 