import React from "react";

const PageBanner = ({img, header, textDetails}) => {
  return (
    <div
      className="hero h-[700px]"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className=" ">
      
      </div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-4xl hero-overlay ">
          <div className=" px-72 py-24 ">
          <h1 className="mb-5 uppercase text-5xl font-bold">{header}</h1>
          <p className="mb-5">
            {textDetails}
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
