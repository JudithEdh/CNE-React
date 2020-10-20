import React from 'react';
import PuppyCard from './PuppyCard';

function Puppies() {
    // const pup = {
    //     "name": "Harry Pawter",
    //     "src": "https://placedog.net/300/200?id=43",
    //     "phone": "(212)5551234",
    //     "email": "harry@pawter.pup"
    // }

    return (
        <>
            <div className="contacts">
                <PuppyCard
                    name="Jimmy Chew"
                    email="jimmy@hi.com"
                    src="https://placedog.net/400/200?id=5"
                    phone={2125552345}
                />
                <PuppyCard
                    name="Harry Pawter"
                    src="https://placedog.net/400/200?id=34"
                />
            </div>
        </>
    );
}
export default Puppies; 