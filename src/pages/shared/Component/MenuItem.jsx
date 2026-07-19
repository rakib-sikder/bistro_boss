const MenuItem = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div className="mb-2 flex max-w-md items-center gap-4 p-4">
      <img className="h-20 w-20 shrink-0 rounded-full object-cover ring-1 ring-foreground/10" src={image} alt="" />
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2">
          <h3 className="shrink-0 text-base font-semibold uppercase tracking-wide">{name}</h3>
          <span className="mb-1 flex-1 border-b border-dotted border-neutral-300" aria-hidden="true"></span>
          <span className="shrink-0 text-lg font-semibold text-primary">${price}</span>
        </div>
        <p className="mt-1 text-sm text-neutral-500">{recipe}</p>
      </div>
    </div>
  );
};

export default MenuItem;
