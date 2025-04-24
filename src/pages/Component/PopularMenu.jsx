import React, { useEffect, useState } from 'react';

import MenuItem from '../shared/Component/MenuItem';
import Sectiontitle from '../shared/Section title/Sectiontitle';

const PopularMenu = () => {
    const [menu, setMenu]=useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json()
        .then(data =>{
            const popularitem = data.filter(item => item.category === 'popular')
            setMenu(popularitem)}))
    },[])


    
    return (
        <section>
            <Sectiontitle subheading={"Poular items"} heading={"From our menu"}></Sectiontitle>

            <div className='grid md:grid-cols-2 '>
                {
                    menu.map(item => <MenuItem key={item._id} item={item}/>)
                }
            </div>

        </section>
    );
};

export default PopularMenu;