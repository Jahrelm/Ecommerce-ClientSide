/* import InputQuantityCom from "../Helpers/InputQuantityCom"; */
import { useSelector, useDispatch } from "react-redux";
import {useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import {removeFromCart } from "../../redux/actions/cartActions";

export default function ProductsTable({ className }) {

  const { cart } = useSelector((state) => state.cart) || { cart: [] };
  const [totalCartCost, setTotalCartCost] = useState(0);

    
  const cartItems = cart.length > 0 ? cart[0].cartItems : [];



  const dispatch = useDispatch();

    useEffect(() => {
      if (Array.isArray(cart) && cart.length > 0 && cart[0].cartItems) {
        const total = cart[0].cartItems.reduce(
          (sum, item) => sum + (parseFloat(item.subTotal) || 0),
          0
        );
        setTotalCartCost(total.toFixed(2));
      } else {
        setTotalCartCost("0.00");
      }
    }, [cart]);



  useEffect(() => {
    dispatch(removeFromCart());
  }, [dispatch]);

  const handleRemoveFromCart = (cartItemId) => {
    dispatch(removeFromCart(cartItemId));
  }
 /*  useEffect(() => {
    if (cart.length > 0) {
      const total = cart.reduce((sum, item) => sum + item.totalCost, 0);
      setTotalCartCost(total.toFixed(2));
    } else{
      setTotalCartCost(0);
    }
  }, [cart]); */



  return (
    <div className={`w-full ${className || ""}`}>
      <div className="relative w-full overflow-x-auto border border-[#EDEDED]">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <tbody>
            {/* table heading */}
            <tr className="text-[13px] font-medium text-black bg-[#F6F6F6] whitespace-nowrap px-2 border-b default-border-bottom uppercase">
              <td className="py-4 pl-10 block whitespace-nowrap min-w-[300px]">
                product
              </td>
              <td className="py-4 whitespace-nowrap text-center">Brand</td>
              <td className="py-4 whitespace-nowrap text-center">price</td>
              <td className="py-4 whitespace-nowrap  text-center">quantity</td>
              <td className="py-4 whitespace-nowrap  text-center">total</td>
              <td className="py-4 whitespace-nowrap text-right w-[114px]"></td>
            </tr>
            {/* table heading end */}
             {cartItems.map((item, index) => ( 
            <tr className="bg-white border-b hover:bg-gray-50"
            key={index}
            >
              <td className="pl-10  py-4  w-[380px]">
                <div className="flex space-x-6 items-center">
                  <div className="w-[80px] h-[80px] overflow-hidden flex justify-center items-center border border-[#EDEDED]">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/product-img-1.jpg`}
                      alt="product"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <p className="font-medium text-[15px] text-qblack">
                      {item.product.title}
                    </p>
                  </div>
                </div>
              </td>
              <td className="text-center py-4 px-2">
                <div className="flex space-x-1 items-center justify-center">
                  <span className="text-[15px] font-normal">{item.product.brand}</span>
                </div>
              </td>
              <td className="text-center py-4 px-2">
                <div className="flex space-x-1 items-center justify-center">
                  <span className="text-[15px] font-normal">{item.product.price}</span>
                </div>
              </td>
              <td className="text-center py-4 px-2">
                <div className="flex space-x-1 items-center justify-center">
                  <span className="text-[15px] font-normal">{item.quantity}</span>
                </div>
              </td>
              <td className="text-center py-4 px-2">
                <div className="flex space-x-1 items-center justify-center">
                  <span className="text-[15px] font-normal">${item.subTotal.toFixed(2)}</span>
                </div>
              </td>
              <td className="text-right py-4">
                <div className="flex space-x-1 items-center justify-center">
                 <MdDelete
                 onClick = {() => handleRemoveFromCart(item.id)}/>
                </div>
              </td>
            </tr>
             ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
