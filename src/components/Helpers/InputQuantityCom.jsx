import { useState } from "react";
/* import { useSelector } from "react-redux"; */

export default function InputQuantityCom() {
  const [quantity, setQuantity] = useState(1);

/*   const {cart} = useSelector((state) => state.cart); */

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  return (
    <div className="w-[120px] h-[40px] px-[26px] flex items-center border border-qgray-border">
      {/* {cart.map((item, index) => ( */}
      <div className="flex justify-between items-center w-full"
      
     /*  key={index} */
      >
        <button
          onClick={decrement}
          type="button"
          className="text-base text-qgray"
        >
          -
        </button>
        <span className="text-qblack">{quantity}</span>
        <button
          onClick={increment}
          type="button"
          className="text-base text-qgray"
        >
          +
        </button>
      </div>
      {/* ))} */}
    </div>
  );
}
