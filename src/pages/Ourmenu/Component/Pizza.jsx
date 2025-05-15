import Button from "../../shared/Component/Button";
import ItemDetails from "../../shared/Component/ItemDetails";
import MenuItem from "../../shared/Component/MenuItem";
import img from '../../../assets/home/chef-service.jpg'

const Pizza = ({pizza}) => {
   
  return (
    <>
       <div className='text-white'>
            <ItemDetails  heading={'Pizza'} textDetails={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.' } backgroundImg={img} backgroundColor={'bg-black'} opacity={'bg-opacity-60'}>

            </ItemDetails>
        </div>

        <div className="flex flex-col items-center justify-center my-20">

      <div className="grid md:grid-cols-2 ">
        {pizza?.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <Button btnText={"ORDER YOUR FAVOURITE FOOD"}></Button>
    </div>
    </>
    
  );
};

export default Pizza;
