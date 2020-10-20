import React from 'react';
import PropTypes from 'prop-types';

function PuppyCard(props) {
    return (
        <>
            <div className="contact-card">
                <img src={props.src} />
                <h3>{props.name}</h3>
                <p>Phone: {props.phone}</p>
                <p>Email: {props.email}</p>
            </div>
        </>
    )
}

export default PuppyCard;


