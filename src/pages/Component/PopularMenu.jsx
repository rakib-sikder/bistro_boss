

import MenuItem from '../shared/Component/MenuItem';
import Sectiontitle from '../shared/Section title/Sectiontitle';
import Button from '../shared/Component/Button';
import useMenu from '../../hooks/useMenu';

const PopularMenu = () => {
    const [menu, loading] = useMenu()
    const popular= menu?.filter(item => item.category === 'popular')
    return (
        <section className="flex flex-col items-center justify-center my-20">
            <Sectiontitle subHeading={"Poular items"} heading={"From our menu"}></Sectiontitle>

            <div className='grid md:grid-cols-2 '>
                {
                    popular?.map(item => <MenuItem key={item._id} item={item}/>)
                }
                
            </div>
            <Button btnText={"View Full Menu"}></Button>

        </section>
    );
};

export default PopularMenu;