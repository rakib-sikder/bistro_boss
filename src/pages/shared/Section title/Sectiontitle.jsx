import React from 'react';

const Sectiontitle = ({heading, subheading, textColor}) => {
    return (
        <div className={`text-center mx-auto md:w-3/12 my-8 ${textColor}`}>
            <p className='text-yellow-600 mb-2'>---{subheading}---</p>
            <h3 className='text-3xl uppercase border-y-4 py-4'>{heading}</h3>
            
        </div>
    );
};

export default Sectiontitle;