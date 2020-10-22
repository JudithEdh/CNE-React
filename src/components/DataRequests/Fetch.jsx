import React from 'react';
import axios from 'axios';

const Fetch = () => {

    // Fetch example:
    // Syntax: fetch('path').then('do something');
    // fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    //.then(res => console.log(res.json()));

    // axios (make sure to do `npm install axios --save` first)
    axios.get(`https://pokeapi.co/api/v2/pokemon/dittoskjhdkasdhkahdkjkj`)
        .then(res => console.log(res))
        .catch(err => console.log("something went wrong"));

    return(
        <h1>hi</h1>
    );
}

export default Fetch;