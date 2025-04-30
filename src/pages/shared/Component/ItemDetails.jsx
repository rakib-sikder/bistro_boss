import React from "react";

const ItemDetails = ({
  heading,
  textDetails,
  backgroundImg,
  backgroundColor,
  opacity,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-fixed `}
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",

        
      }}
    >
      <div className={`${backgroundColor} ${opacity} text-center p-24 m-24 `}>
        <h3 className="uppercase text-4xl mb-4">{heading}</h3>
        <p className="text-sm font-bold text-center">
          {textDetails}
        </p>
      </div>
    </div>
  );
};

export default ItemDetails;
