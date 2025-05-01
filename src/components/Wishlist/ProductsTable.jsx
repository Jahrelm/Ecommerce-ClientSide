import {
  fetchWishList,
  removeFromWishlist,
} from "../../redux/actions/wishListAction";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { addToCart } from "../../redux/actions/cartActions";

// Hardcoded sample product data for the wishlist
const SAMPLE_PRODUCTS = [
  {
    id: "1",
    productId: "5058",
    product: {
      id: "5058",
      title: "Sample Product 1",
      brand: "Sample Brand",
      price: 99.99,
      image: "/assets/images/product-img-1.jpg"
    },
    quantity: 1
  },
  {
    id: "2",
    productId: "5059",
    product: {
      id: "5059",
      title: "Sample Product 2",
      brand: "Sample Brand",
      price: 149.99,
      image: "/assets/images/product-img-2.jpg"
    },
    quantity: 1
  }
];

export default function ProductsTable({ className }) {
  const dispatch = useDispatch();
  const { wishlist, loading, error } = useSelector((state) => state.wishlist);
  const [displayItems, setDisplayItems] = useState([]);
  const [showSampleData, setShowSampleData] = useState(false); // Set to false to use API data by default

  // Fetch wishlist on component mount
  useEffect(() => {
    dispatch(fetchWishList());
  }, [dispatch]);

  // Update display items when wishlist changes or when toggle changes
  useEffect(() => {
    if (showSampleData) {
      setDisplayItems(SAMPLE_PRODUCTS);
    } else {
      // Try to use real wishlist data if available
      if (wishlist && Array.isArray(wishlist) && wishlist.length > 0) {
        setDisplayItems(wishlist);
      } else {
        // If no real data, show empty
        setDisplayItems([]);
      }
    }
  }, [wishlist, showSampleData]);


  useEffect(() => {
    console.log("Current wishlist state:", wishlist);
    console.log("Current display items:", displayItems);
  }, [wishlist, displayItems]);

  const handleRemoveItem = async (itemId) => {
    try {
      if (!itemId) {
        console.error("Invalid item ID for removal");
        return;
      }
      
      // If using sample data, just remove from local state
      if (showSampleData) {
        setDisplayItems(displayItems.filter(item => item.id !== itemId));
      } else {
        // Otherwise use the real remove action
        await dispatch(removeFromWishlist(itemId));
        // Also update local state for immediate UI update
        setDisplayItems(displayItems.filter(item => item.id !== itemId));
      }
    } catch (error) {
      console.error("Failed to remove item:", error);
    }
  };

  const handleAddToCart = async (item) => {
    try {
      if (!item.productId) {
        console.error("No product ID available for cart addition");
        return;
      }
      await dispatch(addToCart(item.productId));
      await handleRemoveItem(item.id);
    } catch (error) {
      console.error("Failed to add item to cart:", error);
    }
  };

  // Toggle between sample data and real data
  const toggleDataSource = () => {
    setShowSampleData(!showSampleData);
  };

  // Show loading state
  if (loading && displayItems.length === 0) {
    return <div className="text-center py-4">Loading wishlist items...</div>;
  }

  // Show error state
  if (error && displayItems.length === 0) {
    return <div className="text-center py-4 text-red-500">{error}</div>;
  }

  // Show empty state
  if (!displayItems || displayItems.length === 0) {
    return <div className="text-center py-4">Your wishlist is empty</div>;
  }

  return (
    <div className={`w-full ${className || ""}`}>
      {/* Toggle button */}
      <div className="mb-4">
        <button 
          onClick={toggleDataSource}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {showSampleData ? "Show Real Wishlist Data" : "Show Sample Data"}
        </button>
        <span className="ml-4 text-sm text-gray-600">
          Currently showing: <strong>{showSampleData ? "Sample Data" : "Real Wishlist Data"}</strong>
        </span>
      </div>
      
      {/* Wishlist table */}
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
              <td className="py-4 whitespace-nowrap text-center">actions</td>
            </tr>
            {displayItems.map((item, index) => (
              <tr className="bg-white border-b hover:bg-gray-50" key={index}>
                <td className="pl-10 py-4 w-[380px]">
                  <div className="flex space-x-6 items-center">
                    <div className="w-[80px] h-[80px] overflow-hidden flex justify-center items-center border border-[#EDEDED]">
                      <img
                        src={
                          item.product?.image ||
                          `${process.env.PUBLIC_URL}/assets/images/product-img-1.jpg`
                        }
                        alt={item.product?.title || "Product"}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <p className="font-medium text-[15px] text-qblack">
                        {item.product?.title || "No Product Name"}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="text-center py-4 px-2">
                  <div className="flex space-x-1 items-center justify-center">
                    <span className="text-[15px] font-normal">
                      {item.product?.brand || "No Brand"}
                    </span>
                  </div>
                </td>
                <td className="text-center py-4 px-2">
                  <div className="flex space-x-1 items-center justify-center">
                    <span className="text-[15px] font-normal">
                      ${Number(item.product?.price || 0).toFixed(2)}
                    </span>
                  </div>
                </td>
                <td className="text-center py-4 px-2">
                  <div className="flex space-x-1 items-center justify-center">
                    <span className="text-[15px] font-normal">
                      {item.quantity || 1}
                    </span>
                  </div>
                </td>
                <td className="text-center py-4 px-2">
                  <div className="flex space-x-1 items-center justify-center">
                    <span className="text-[15px] font-normal">
                      $
                      {(
                        Number(item.product?.price || 0) *
                        (item.quantity || 1)
                      ).toFixed(2)}
                    </span>
                  </div>
                </td>
                <td className="text-center py-4">
                  <div className="flex space-x-3 items-center justify-center">
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      <MdDelete size={20} />
                    </button>
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
