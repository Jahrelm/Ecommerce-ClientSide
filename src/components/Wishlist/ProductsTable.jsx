import { fetchWishList } from "../../redux/actions/wishListAction";
/* import InputQuantityCom from "../Helpers/InputQuantityCom"; */
import { useSelector , useDispatch } from "react-redux";
import {useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { addToCart } from "../../redux/actions/cartActions";

export default function ProductsTable({ className }) {

  const dispatch = useDispatch();

const {wishlist} = useSelector((state) => state.wishlist);

  useEffect(() => {
    dispatch(fetchWishList());
  }, [dispatch])

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
           {wishlist.map((item, index) => ( 
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
                    {item.title}
                  </p>
                </div>
              </div>
            </td>
            <td className="text-center py-4 px-2">
              <div className="flex space-x-1 items-center justify-center">
                <span className="text-[15px] font-normal">{item.brand}</span>
              </div>
            </td>
            <td className="text-center py-4 px-2">
              <div className="flex space-x-1 items-center justify-center">
                <span className="text-[15px] font-normal">{item.price}</span>
              </div>
            </td>
            <td className="text-center py-4 px-2">
              <div className="flex space-x-1 items-center justify-center">
                <span className="text-[15px] font-normal">{item.quantity}</span>
              </div>
            </td>
            <td className="text-center py-4 px-2">
              <div className="flex space-x-1 items-center justify-center">
                <span className="text-[15px] font-normal">${item.totalCost}</span>
              </div>
            </td>
            <td className="text-right py-4">
              <div className="flex space-x-1 items-center justify-center">
               <MdDelete/>
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