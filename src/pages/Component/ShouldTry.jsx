import useMenu from "../../hooks/useMenu";
import FoodItemCart from "../shared/Component/FoodItemCart";
import { Reveal } from "@/components/motion/Reveal";

const ShouldTry = () => {
  const [menu] = useMenu();

  const popularMenu = menu?.filter((item) => item.category === "popular");
  const firstThree = popularMenu?.slice(1, 4);

  return (
    <Reveal className="mt-10 mb-20 grid gap-10 md:grid-cols-3">
      {firstThree?.map((item) => (
        <FoodItemCart key={item._id} img={item.image} FoodName={item.name} FoodDetails={item.recipe} />
      ))}
    </Reveal>
  );
};

export default ShouldTry;
