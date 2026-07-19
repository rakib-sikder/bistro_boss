import MenuItem from "../shared/Component/MenuItem";
import Sectiontitle from "../shared/Section title/Sectiontitle";
import Button from "../shared/Component/Button";
import useMenu from "../../hooks/useMenu";
import { Reveal } from "@/components/motion/Reveal";
import { Link } from "react-router-dom";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu?.filter((item) => item.category === "popular");
  return (
    <section className="my-20 flex flex-col items-center justify-center">
      <Sectiontitle subHeading={"Poular items"} heading={"From our menu"}></Sectiontitle>

      <Reveal className="grid md:grid-cols-2">
        {popular?.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </Reveal>
      <Link to="/menu">
        <Button btnText={"View Full Menu"}></Button>
      </Link>
    </section>
  );
};

export default PopularMenu;