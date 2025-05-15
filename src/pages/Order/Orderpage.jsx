import { Helmet } from "react-helmet";
import PageBanner from "../shared/Component/PageBanner";
import img from "../../assets/shop/banner2.jpg";
import "react-tabs/style/react-tabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import useMenu from "../../hooks/useMenu";
import FoodItemCart from "../shared/Component/FoodItemCart";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Orderpage = () => {
    const { category}= useParams()
    const catagoryindex =["salad","pizza","dessert","soup","drinks"]
    const index = catagoryindex.indexOf(category)

    const [tabIndex, setTabIndex] = useState(index);
  const [menu, loading] = useMenu();    
  const pizza = menu?.filter((item) => item.category === "pizza");
  const salad = menu?.filter((item) => item.category === "salad");
  const dessert = menu?.filter((item) => item.category === "dessert");
  const soup = menu?.filter((item) => item.category === "soup");
  const drinks = menu?.filter((item) => item.category === "drinks");


  return (
    <div>
      <Helmet>
        <title>Bistro boss | Order Food
        </title>
      </Helmet>

      <PageBanner
        img={img}
        header={"Order Food"}
        textDetails={"Would you like to try a dish?"}
      ></PageBanner>

      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}
      className="max-w-screen-xl mx-auto">
        <TabList className="uppercase font-bold flex justify-center items-center gap-10 mt-10">
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Dessert</Tab>
          <Tab>Soup</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel >

           
            <div className="grid md:grid-cols-3 gap-10 mt-10 mb-20">
            {

            salad?.map((item) =><div ><FoodItemCart key={item._id} price={item.price} img={item.image} FoodName={item.name} FoodDetails={item.recipe}></FoodItemCart></div>)
            }
            </div>
            </TabPanel>
        <TabPanel>
            <div className="grid md:grid-cols-3 gap-10 mt-10 mb-20">
            {
            pizza?.map((item) =><div ><FoodItemCart price={item.price} key={item._id} img={item.image} FoodName={item.name} FoodDetails={item.recipe}></FoodItemCart></div>)
            }
            </div>
        </TabPanel>
        <TabPanel>
            <div className="grid md:grid-cols-3 gap-10 mt-10 mb-20">
            {
            dessert?.map((item) =><div ><FoodItemCart price={item.price} key={item._id} img={item.image} FoodName={item.name} FoodDetails={item.recipe}></FoodItemCart></div>)
            }
            </div>
        </TabPanel>
        <TabPanel>
            <div className="grid md:grid-cols-3 gap-10 mt-10 mb-20">
            {
            soup?.map((item) =><div ><FoodItemCart price={item.price} key={item._id} img={item.image} FoodName={item.name} FoodDetails={item.recipe}></FoodItemCart></div>)
            }
            </div>
        </TabPanel>
        <TabPanel>
            <div className="grid md:grid-cols-3 gap-10 mt-10 mb-20">
            {
            drinks?.map((item) =><div ><FoodItemCart price={item.price} key={item._id} img={item.image} FoodName={item.name} FoodDetails={item.recipe}></FoodItemCart></div>)
            }
            </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Orderpage;
