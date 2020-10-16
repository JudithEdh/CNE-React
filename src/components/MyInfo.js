import React from 'react';
import Food from './Food'
import "./myInfo.css";
function MyInfo(){
    return(
        // name
        // blurb
        // where I want to go
        <div className="Savannah">
            <h1>Savannah Vaith</h1>
            <p>The first time I went to the gym i broke my foot...</p>
            <ol>
                <li>Thailand</li>
                <li>Japan</li>
                <li>Bora bora (but I'm pora pora)</li>
            </ol>
            <Food/>
        </div>
    );
}

export default MyInfo;
