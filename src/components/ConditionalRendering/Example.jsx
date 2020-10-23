import React from 'react';

const Login = props => {
    if(props.isLoggedIn){
        return <button onClick={props.logout}>Log out</button>
    }else{
        return <button onClick={props.login}>Log in </button>
    }
}

export default Login; 

// isLoggedIn = true/false
// logout
// login