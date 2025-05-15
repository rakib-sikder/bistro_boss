import Button from "../../shared/Component/Button";

import MenuItem from "../../shared/Component/MenuItem";
import Sectiontitle from "../../shared/Section title/Sectiontitle";
import { Link, } from "react-router-dom";

const Offersection = ({offered}) => {
  return (
    <div className="flex flex-col items-center justify-center my-20">
      <Sectiontitle
        subHeading={"Don't miss"}
        heading={"TODAY'S OFFER"}
      ></Sectiontitle>

      <div className="grid md:grid-cols-2 ">
        {offered?.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <Link to="/shop">
      <Button btnText={"ORDER YOUR FAVOURITE FOOD"}></Button></Link>
      
    </div>
  );
};

export default Offersection;
