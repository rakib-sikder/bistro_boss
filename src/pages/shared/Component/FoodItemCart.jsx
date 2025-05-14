
import Button from './Button';


const FoodItemCart = ({img,FoodName,FoodDetails}) => {
    
    return (
         <div>
      <div className="grid md:grid-cols-3 gap-10 mt-10 mb-20">
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src={img}
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-xl">{FoodName}</h2>
            <p>
                {
                    FoodDetails
                }
            </p>
            <div className="card-actions justify-center text-[#BB8506]">
              <Button className="hover:text-[#BB8506] " btnText={"Add to Cart"}></Button>
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
    );
};

export default FoodItemCart;