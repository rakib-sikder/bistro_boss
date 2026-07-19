import React from 'react';

const MenuItem = ({item}) => {
    const {name, image, recipe, price} = item;
    return (
        <div className='flex gap-4 p-4 mb-2 items-center max-w-md'>
            <img className='rounded-full h-20 w-20 object-cover shrink-0' src={image} alt="" />
            <div className='flex-1 min-w-0'>
                <div className='flex items-baseline gap-2'>
                    <h3 className='uppercase text-base font-semibold tracking-wide shrink-0'>{name}</h3>
                    <span className='flex-1 border-b border-dotted border-neutral-300 mb-1' aria-hidden="true"></span>
                    <span className='text-lg font-semibold text-[#d3502a] shrink-0'>${price}</span>
                </div>
                <p className='text-sm text-neutral-500 mt-1'>{recipe}</p>
            </div>
        </div>
    );
};

export default MenuItem;
