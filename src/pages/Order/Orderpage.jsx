import { Helmet } from 'react-helmet';
import PageBanner from '../shared/Component/PageBanner';
import img from '../../assets/shop/banner2.jpg'
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Orderpage = () => {
   
    return (
        <div>
             <Helmet>
        <title>Bistro boss | Shop</title>
         </Helmet>
        
        <PageBanner img={img} header={'Order Food'} textDetails={'Would you like to try a dish?'}></PageBanner>
            
            
 <Tabs className='max-w-screen-xl mx-auto'>
    <TabList  className='uppercase font-bold flex justify-center items-center gap-10 mt-10'>
        <Tab>Salad</Tab>
        <Tab>Pizza</Tab>
        <Tab >Dessert</Tab>
        <Tab >Soup</Tab>
        <Tab >Drinks</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
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