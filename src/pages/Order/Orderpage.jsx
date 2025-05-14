import { Helmet } from "react-helmet";
import PageBanner from "../shared/Component/PageBanner";
import img from "../../assets/shop/banner2.jpg";
import "react-tabs/style/react-tabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import useMenu from "../../hooks/useMenu";
import FoodItemCart from "../shared/Component/FoodItemCart";

const Orderpage = () => {
  const [menu, loading] = useMenu();
  const pizza = menu?.filter((item) => item.category === "pizza");
  const salad = menu?.filter((item) => item.category === "salad");
  const dessert = menu?.filter((item) => item.category === "dessert");
  const soup = menu?.filter((item) => item.category === "soup");
  const drinks = menu?.filter((item) => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Bistro boss | Shop</title>
      </Helmet>

      <PageBanner
        img={img}
        header={"Order Food"}
        textDetails={"Would you like to try a dish?"}
      ></PageBanner>

      <Tabs className="max-w-screen-xl mx-auto">
        <TabList className="uppercase font-bold flex justify-center items-center gap-10 mt-10">
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Dessert</Tab>
          <Tab>Soup</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel >
            <div className="grid grid-cols-3 gap-10 mt-10 mb-20">
            {
            salad?.map((item) =><div ><FoodItemCart key={item._id} img={item.image} FoodName={item.name} FoodDetails={item.recipe}></FoodItemCart></div>)
            }
            </div>
            </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 5</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Orderpage;
