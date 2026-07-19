import { useContext } from "react";
import { toast } from "sonner";

import Button from "./Button";
import { CartContext } from "../../../cart/CartProvider";

const FoodItemCart = ({ item, img, FoodName, FoodDetails, price }) => {
  const { addItem } = useContext(CartContext);

  const name = item?.name ?? FoodName;
  const image = item?.image ?? img;
  const details = item?.recipe ?? FoodDetails;
  const itemPrice = item?.price ?? price;

  const handleAddToCart = () => {
    if (!item) return;
    addItem(item);
    toast.success(`${item.name} added to cart`);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg">
      <figure>
        <img src={image} alt={name} className="w-full h-48 object-cover" />
      </figure>
      {itemPrice && (
        <p className="absolute top-4 right-4 bg-neutral-900 text-white text-sm px-2.5 py-1 rounded-full">
          ${itemPrice}
        </p>
      )}
      <div className="p-6 text-center">
        <h2 className="text-lg font-semibold uppercase tracking-wide">{name}</h2>
        <p className="text-sm text-neutral-500 mt-2">{details}</p>
        <div className="mt-4 flex justify-center">
          <Button btnText={"Add to Cart"} onClick={handleAddToCart} disabled={!item} />
        </div>
      </div>
    </div>
  );
};

export default FoodItemCart;
