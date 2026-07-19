const PageBanner = ({ img, header, textDetails }) => {
  return (
    <div
      className="relative flex h-[420px] items-center justify-center bg-cover bg-center sm:h-[500px]"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative max-w-xl px-6 text-center text-white">
        <h1 className="mb-4 text-3xl font-semibold uppercase tracking-wide sm:text-5xl">{header}</h1>
        <p className="text-neutral-200">{textDetails}</p>
      </div>
    </div>
  );
};

export default PageBanner;
