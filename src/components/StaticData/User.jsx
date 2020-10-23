import React from 'react';
import Person from './Person';
import People from './Users.json';

const UserProfile = () => {
    console.log(People);
    return (
        <>
            {
                People.map((person) => (
                    // <p>Hello {person.name}, you are from {person.address.city}</p>
                    <Person key={person.id} name={person.name} city={person.address.city}/>
                ))
            }
        </>


    );
}

export default UserProfile;