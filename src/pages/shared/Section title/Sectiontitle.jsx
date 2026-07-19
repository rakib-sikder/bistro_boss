import React from 'react';

const Sectiontitle = ({heading, subHeading, textColor}) => {
    return (
        <div className={`text-center mx-auto max-w-md my-10 px-4 ${textColor}`}>
            <p className='text-[#d3502a] text-sm tracking-[0.3em] uppercase mb-2 font-medium'>{subHeading}</p>
            <h3 className='text-3xl font-semibold uppercase tracking-wide border-y border-neutral-200 dark:border-neutral-800 py-4'>{heading}</h3>
        </div>
    );
};

export default Sectiontitle;
