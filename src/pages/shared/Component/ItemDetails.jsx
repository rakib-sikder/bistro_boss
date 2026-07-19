const ItemDetails = ({
  heading,
  textDetails,
  backgroundImg,
  backgroundColor,
  opacity,
}) => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-fixed"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={`${backgroundColor} ${opacity} m-6 max-w-2xl rounded-2xl p-16 text-center shadow-xl sm:m-24 sm:p-24`}>
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-primary">Our Story</p>
        <h3 className="mb-4 text-3xl font-semibold uppercase tracking-wide sm:text-4xl">{heading}</h3>
        <p className="text-sm leading-relaxed text-neutral-600">{textDetails}</p>
      </div>
    </div>
  );
};

export default ItemDetails;
