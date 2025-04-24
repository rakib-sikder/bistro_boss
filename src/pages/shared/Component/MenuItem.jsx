import React from 'react';

const MenuItem = ({item}) => {
    const {name, image, recipe, price} = item;
    return (
        <div className='flex space-x-4 p-4 mb-4 justify-center'>
            <img className='rounded-[200px] rounded-tl-none h-28 w-28' src={image} alt="" />
            <div>
                <h3 className='uppercase text-xl'>{name}----------</h3>
                <p className=' text-base text-[#737373]'>{recipe}</p>
                
            </div>
            <p className='text-center text-xl text-[#BB8506]'>${price}</p>
            
        </div>
    );
};

export default MenuItem;