import React from 'react';

const MonButton = (props) => {
    return ( <button{ ...props}>{props.label}</button> );
};

export default MonButton;