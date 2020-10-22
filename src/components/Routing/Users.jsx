import React from 'react';
import {useParams} from 'react-router-dom';

const Users = () => {
    let {id} = useParams();
    return(
        <h1>Value fro params isssss: {id}</h1>
    );
}

export default Users;