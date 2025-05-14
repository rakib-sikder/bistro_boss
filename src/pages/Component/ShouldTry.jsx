import useMenu from "../../hooks/useMenu";
import FoodItemCart from "../shared/Component/FoodItemCart";

const ShouldTry = () => {
  const [ menu, loading ] = useMenu();

  const popularMenu = menu?.filter((item) => item.category === "popular");
  const firstThree = popularMenu?.slice(1, 4);

  return (
    <div className="grid md:grid-cols-3 gap-10 mt-10 mb-20">
      {
            firstThree?.map((item) =><div ><FoodItemCart key={item._id} img={item.image} FoodName={item.name} FoodDetails={item.recipe}></FoodItemCart></div>)
            }
 
    </div>
    
    
  );
};

export default ShouldTry;
