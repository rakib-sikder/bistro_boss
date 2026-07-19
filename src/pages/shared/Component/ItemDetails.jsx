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
      <div className={`${backgroundColor} ${opacity} text-center p-16 sm:p-24 m-6 sm:m-24 rounded-2xl shadow-xl max-w-2xl`}>
        <p className="text-[#d3502a] text-xs tracking-[0.3em] uppercase mb-3 font-medium">Our Story</p>
        <h3 className="uppercase text-3xl sm:text-4xl font-semibold mb-4 tracking-wide">{heading}</h3>
        <p className="text-sm text-neutral-600 leading-relaxed">
          {textDetails}
        </p>
      </div>
    </div>
  );
};

export default ItemDetails;
