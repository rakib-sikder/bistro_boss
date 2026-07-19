
import Button from './Button';


const FoodItemCart = ({img,FoodName,FoodDetails,price}) => {

    return (
        <div className="relative overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg">
          <figure>
            <img
              src={img}
              alt={FoodName}
              className="w-full h-48 object-cover"
            />
          </figure>
          {price && <p className="absolute top-4 right-4 bg-neutral-900 text-white text-sm px-2.5 py-1 rounded-full">${price}</p>}
          <div className="p-6 text-center">
            <h2 className="text-lg font-semibold uppercase tracking-wide">{FoodName}</h2>
            <p className="text-sm text-neutral-500 mt-2">
                {
                    FoodDetails
                }
            </p>
            <div className="mt-4 flex justify-center">
              <Button btnText={"Add to Cart"}></Button>
            </div>
          </div>
        </div>
    );
};

export default FoodItemCart;
