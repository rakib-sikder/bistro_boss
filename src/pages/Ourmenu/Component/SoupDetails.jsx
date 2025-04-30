import React from 'react';
import ItemDetails from '../../shared/Component/ItemDetails';
import img from '../../../assets/home/chef-service.jpg'

const SoupDetails = () => {
    return (
        <div className='text-white'>
            <ItemDetails  heading={'Soups'} textDetails={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.' } backgroundImg={img} backgroundColor={'bg-black'} opacity={'bg-opacity-60'}>

            </ItemDetails>
        </div>
    );
};

export default SoupDetails;