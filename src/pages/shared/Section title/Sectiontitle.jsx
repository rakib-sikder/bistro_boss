const Sectiontitle = ({ heading, subHeading, textColor }) => {
  return (
    <div className={`mx-auto my-10 max-w-md px-4 text-center ${textColor}`}>
      <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-primary">{subHeading}</p>
      <h3 className="border-y border-neutral-200 py-4 text-3xl font-semibold uppercase tracking-wide dark:border-neutral-800">
        {heading}
      </h3>
    </div>
  );
};

export default Sectiontitle;
