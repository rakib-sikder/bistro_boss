
import Button from "../../shared/Component/Button";
import MenuItem from "../../shared/Component/MenuItem";
import { Link } from "react-router-dom";
import img from '../../../assets/home/chef-service.jpg'
import ItemDetails from "../../shared/Component/ItemDetails";

const Dessert = ({dessert}) => {

  return (
    <>
    <div className='text-white'>
            <ItemDetails  heading={'DESSERTS'} textDetails={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.' } backgroundImg={img} backgroundColor={'bg-black'} opacity={'bg-opacity-60'}>

            </ItemDetails>
        </div>

          <div className="flex flex-col items-center justify-center my-20">

      <div className="grid md:grid-cols-2 ">
        {dessert?.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <Link to={`/order/dessert`}>
      <Button btnText={"ORDER YOUR FAVOURITE FOOD"}></Button></Link>
      
    </div>
    </>
  
  );
};

export default Dessert;
