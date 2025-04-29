import React from "react";
import Sectiontitle from "../shared/Section title/Sectiontitle";
import Button from "../shared/Component/Button";
import img from "../../assets/home/featured.jpg";

const ShouldTry = () => {
  return (
    <div>
      <Sectiontitle
        subheading={"Should Try"}
        heading={"CHEF RECOMMENDS"}
      ></Sectiontitle>

      <div className="grid md:grid-cols-3 gap-10 mt-10 mb-20">
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src={img}
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-xl">Caeser Salad</h2>
            <p>
            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <div className="card-actions justify-center text-[#BB8506]">
              <Button className="hover:text-[#BB8506] " btnText={"Add to Cart"}></Button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src={img}
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-xl">Caeser Salad</h2>
            <p>
            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <div className="card-actions justify-center text-[#BB8506]">
              <Button className="hover:text-[#BB8506] " btnText={"Add to Cart"}></Button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src={img}
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-xl">Caeser Salad</h2>
            <p>
            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <div className="card-actions justify-center text-[#BB8506]">
              <Button className="hover:text-[#BB8506] " btnText={"Add to Cart"}></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShouldTry;
