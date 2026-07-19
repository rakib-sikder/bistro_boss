import React from "react";

const PageBanner = ({img, header, textDetails}) => {
  return (
    <div
      className="hero h-[420px] sm:h-[500px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="hero-overlay bg-black/50"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-xl px-6">
          <h1 className="mb-4 uppercase text-3xl sm:text-5xl font-semibold tracking-wide">{header}</h1>
          <p className="text-neutral-200">
            {textDetails}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
