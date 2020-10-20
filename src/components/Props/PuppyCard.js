import React from 'react';
import PropTypes from 'prop-types';

function PuppyCard(props) {
    console.log(props);
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

// default props when prop attributes aren't declared when instantiated
PuppyCard.defaultProps = { 
    phone: 12,
    email: `hello@default.com`
}

// Enforces Types & Validation checking

PuppyCard.propTypes = { 
    phone: PropTypes.number,
    email: PropTypes.string.isRequired
}

export default PuppyCard;


