import React from 'react';
import ItemDetails from '../shared/Component/ItemDetails';
import img from '../../assets/home/chef-service.jpg'

const ResturentDetails = () => {
    return (
        <div>
            <ItemDetails heading={'bistro boss'} textDetails={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.'} backgroundImg={img} backgroundColor={'bg-white'} opacity={'bg-opacity-80'}>

            </ItemDetails>
            
        </div>
    );
};

export default ResturentDetails;