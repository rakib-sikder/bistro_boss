import React from 'react';

const Button = ({btnText}) => {
    return (
        <button className='btn btn-outline border-0 border-b-2 mt-4'>{btnText}</button>
    );
};

export default Button;