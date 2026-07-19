import React from 'react';

const Button = ({btnText}) => {
    return (
        <button className='rounded-full border-2 border-[#d3502a] text-[#d3502a] font-medium px-6 py-2.5 mt-6 hover:bg-[#d3502a] hover:text-white transition-colors'>{btnText}</button>
    );
};

export default Button;
