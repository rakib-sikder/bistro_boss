import React from "react";
import useMenu from "../../../hooks/useMenu";
import Button from "../../shared/Component/Button";
import MenuItem from "../../shared/Component/MenuItem";
import Sectiontitle from "../../shared/Section title/Sectiontitle";

const SaladMenu = () => {
    const [menu, loading] = useMenu()
    const offered= menu?.filter(item => item.category === 'salad')
  return (
    <div className="flex flex-col items-center justify-center my-20">

      <div className="grid md:grid-cols-2 ">
        {offered?.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <Button btnText={"ORDER YOUR FAVOURITE FOOD"}></Button>
    </div>
  );
};

export default SaladMenu;
