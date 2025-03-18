import {
  fetchWishList,
  removeFromWishlist,
} from "../../redux/actions/wishListAction";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { addToCart } from "../../redux/actions/cartActions";

export default function ProductsTable({ className }) {
  const dispatch = useDispatch();
  const { wishlist, loading, error } = useSelector((state) => state.wishlist);

  useEffect(() => {
    dispatch(fetchWishList());
  }, [dispatch]);

  const handleRemoveItem = async (productId) => {
    try {
      if (!productId || productId === "N/A") {
        throw new Error("Invalid product ID");
      }
      await dispatch(removeFromWishlist(productId));
      dispatch(fetchWishList());
    } catch (error) {
      console.error("Failed to remove item:", error);
    }
  };

  const handleAddToCart = async (item) => {
    try {
      await dispatch(
        addToCart({
          productId: item.id,
          quantity: 1,
        })
      );
      await handleRemoveItem(item.id);
    } catch (error) {
      console.error("Failed to add item to cart:", error);
    }
  };

  const getProductData = (item) => {
    if (typeof item !== "object" || item === null) {
      return {
        id: "N/A",
        title: "Unknown Product",
        brand: "N/A",
        price: 0,
        quantity: 1,
        totalCost: 0,
      };
    }

    return {
      id: item.id || "N/A",
      title: item.title || item.name || "Unknown Product",
      brand: item.brand || "N/A",
      price:
        typeof item.price === "number"
          ? item.price
          : parseFloat(item.price) || 0,
      quantity: item.quantity || 1,
      totalCost: item.totalCost || item.price * (item.quantity || 1),
    };
  };

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error)
    return <div className="text-center py-4 text-red-500">{error}</div>;

  return (
    <div className={`w-full ${className || ""}`}>
      <div className="relative w-full overflow-x-auto border border-[#EDEDED]">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <tbody>
            <tr className="text-[13px] font-medium text-black bg-[#F6F6F6] whitespace-nowrap px-2 border-b default-border-bottom uppercase">
              <td className="py-4 pl-10 block whitespace-nowrap min-w-[300px]">
                product
              </td>
              <td className="py-4 whitespace-nowrap text-center">Brand</td>
              <td className="py-4 whitespace-nowrap text-center">price</td>
              <td className="py-4 whitespace-nowrap text-center">quantity</td>
              <td className="py-4 whitespace-nowrap text-center">total</td>
              <td className="py-4 whitespace-nowrap text-right w-[114px]">
                actions
              </td>
            </tr>
            {Array.isArray(wishlist) &&
              wishlist.map((rawItem, index) => {
                const item = getProductData(rawItem);
                return (
                  <tr
                    className="bg-white border-b hover:bg-gray-50"
                    key={index}
                  >
                    <td className="pl-10 py-4 w-[380px]">
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
                        <span className="text-[15px] font-normal">
                          {item.brand}
                        </span>
                      </div>
                    </td>
                    <td className="text-center py-4 px-2">
                      <div className="flex space-x-1 items-center justify-center">
                        <span className="text-[15px] font-normal">
                          ${item.price}
                        </span>
                      </div>
                    </td>
                    <td className="text-center py-4 px-2">
                      <div className="flex space-x-1 items-center justify-center">
                        <span className="text-[15px] font-normal">
                          {item.quantity}
                        </span>
                      </div>
                    </td>
                    <td className="text-center py-4 px-2">
                      <div className="flex space-x-1 items-center justify-center">
                        <span className="text-[15px] font-normal">
                          $
                          {typeof item.totalCost === "number"
                            ? item.totalCost.toFixed(2)
                            : "0.00"}
                        </span>
                      </div>
                    </td>
                    <td className="text-right py-4">
                      <div className="flex space-x-3 items-center justify-center">
                        <button
                          onClick={() => handleAddToCart(item)}
                          className="text-blue-500 hover:text-blue-700 transition-colors"
                        >
                          Add to Cart
                        </button>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <MdDelete size={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
