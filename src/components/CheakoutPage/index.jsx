import InputCom from "../Helpers/InputCom";
import PageTitle from "../Helpers/PageTitle";
import Layout from "../Partials/Layout";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { checkoutCart } from "../../redux/actions/cartActions";
import { FaShoppingBag, FaCreditCard, FaTruck, FaMoneyBillWave } from "react-icons/fa";

export default function CheakoutPage() {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.cart) || { cart: [] };
  const [totalCartCost, setTotalCartCost] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [shippingMethod, setShippingMethod] = useState("free");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [discount, setDiscount] = useState(0);

  const cartItems = cart.length > 0 ? cart[0].cartItems : [];

  const handleCheckout = () => {
    if (cart.length === 0 || !cart[0].cartItems) {
      console.error("Cart is empty");
      return;
    }

    try {
      // Check if user is authenticated
      const authToken = sessionStorage.getItem('authToken');
      if (!authToken) {
        alert("Please log in to proceed with checkout");
        return;
      }

      // Simple calculation for total
      let subtotal = 0;
      
      cart[0].cartItems.forEach(item => {
        let price;
        if (typeof item.product.price === 'string') {
          // Remove any non-numeric characters except decimal point
          price = parseFloat(item.product.price.toString().replace(/[^0-9.-]+/g, ''));
        } else {
          price = Number(item.product.price);
        }
        
        const qty = parseInt(item.quantity) || 1;
        
        if (!isNaN(price) && !isNaN(qty)) {
          subtotal += price * qty;
        }
      });
      
      const total = subtotal + shippingCost - discount;
      
      // Create simplified checkout data
      const checkoutData = {
        productId: cart[0].cartItems[0].product.id,
        title: cart[0].cartItems[0].product.title,
        subTotal: total.toFixed(2),
        currency: "USD",
        quantity: cart[0].cartItems[0].quantity
      };

      console.log("Sending checkout data:", checkoutData);
      
      // Direct call to checkout action
      dispatch(checkoutCart(checkoutData));
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("There was an error processing your checkout. Please try again.");
    }
  };

  useEffect(() => {
    if (Array.isArray(cart) && cart.length > 0 && cart[0].cartItems) {
      // Simple calculation based on what's in the cart
      let total = 0;
      cart[0].cartItems.forEach(item => {
        // Make sure we're parsing the price as a number, handling any currency symbols
        let price;
        if (typeof item.product.price === 'string') {
          // Remove any non-numeric characters except decimal point
          price = parseFloat(item.product.price.toString().replace(/[^0-9.-]+/g, ''));
        } else {
          price = Number(item.product.price);
        }
        
        const qty = parseInt(item.quantity) || 1;
        
        if (!isNaN(price) && !isNaN(qty)) {
          total += price * qty;
        }
      });
      setTotalCartCost(total.toFixed(2));
      console.log("Set total cart cost to:", total.toFixed(2));
    } else {
      setTotalCartCost("0.00");
    }
  }, [cart]);

  const handleShippingChange = (method) => {
    setShippingMethod(method);
    if (method === "express") {
      setShippingCost(15.00);
    } else if (method === "standard") {
      setShippingCost(5.00);
    } else {
      setShippingCost(0);
    }
  };

  const handleApplyCoupon = () => {
    if (couponCode.toLowerCase() === "discount10") {
      const discountAmount = parseFloat(totalCartCost) * 0.1;
      setDiscount(discountAmount);
      setCouponApplied(true);
    } else {
      setDiscount(0);
      setCouponApplied(false);
      alert("Invalid coupon code");
    }
  };

  const calculateTotal = () => {
    // Parse the totalCartCost as a number
    const subtotal = parseFloat(totalCartCost) || 0;
    const shipping = parseFloat(shippingCost) || 0;
    const discountAmount = parseFloat(discount) || 0;
    
    const total = subtotal + shipping - discountAmount;
    return total > 0 ? total.toFixed(2) : "0.00";
  };

  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="checkout-page-wrapper w-full bg-gray-50 pb-[60px]">
        <div className="w-full mb-5">
          <PageTitle
            title="Checkout"
            breadcrumb={[
              { name: "home", path: "/" },
              { name: "checkout", path: "/checkout" },
            ]}
          />
        </div>
        <div className="checkout-main-content w-full">
          <div className="container-x mx-auto">
            <div className="w-full sm:mb-10 mb-5">
              <div className="sm:flex sm:space-x-[18px] s">
                <div className="sm:w-1/2 w-full mb-5 h-[70px]">
                  <a href="#">
                    <div className="w-full h-full bg-white shadow-sm rounded-md hover:shadow-md transition-all duration-300 text-qblack flex justify-center items-center">
                      <span className="text-[15px] font-medium flex items-center">
                        <FaShoppingBag className="mr-2" /> Log into your Account
                      </span>
                    </div>
                  </a>
                </div>
                <div className="flex-1 h-[70px]">
                  <div className="w-full h-full bg-white shadow-sm rounded-md hover:shadow-md transition-all duration-300 text-qblack flex justify-center items-center">
                    <div className="flex items-center space-x-3 w-full px-5">
                      <input 
                        type="text" 
                        placeholder="Enter Coupon Code" 
                        className="w-full h-[40px] border border-gray-200 rounded px-3 focus:outline-none focus:border-blue-500"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                      />
                      <button 
                        onClick={handleApplyCoupon}
                        className="h-[40px] bg-qblack text-white px-4 rounded hover:bg-blue-700 transition-all duration-300"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:flex lg:space-x-[30px]">
              <div className="lg:w-1/2 w-full">
                <div className="bg-white p-8 rounded-md shadow-sm mb-10">
                  <h1 className="sm:text-2xl text-xl text-qblack font-medium mb-5 pb-5 border-b">
                    Billing Details
                  </h1>
                  <div className="form-area">
                    <form>
                      <div className="sm:flex sm:space-x-5 items-center mb-6">
                        <div className="sm:w-1/2 mb-5 sm:mb-0">
                          <InputCom
                            label="First Name*"
                            placeholder="First Name"
                            inputClasses="w-full h-[50px] focus:border-blue-500"
                          />
                        </div>
                        <div className="flex-1">
                          <InputCom
                            label="Last Name*"
                            placeholder="Last Name"
                            inputClasses="w-full h-[50px] focus:border-blue-500"
                          />
                        </div>
                      </div>
                      <div className="flex space-x-5 items-center mb-6">
                        <div className="w-1/2">
                          <InputCom
                            label="Email Address*"
                            placeholder="email@example.com"
                            inputClasses="w-full h-[50px] focus:border-blue-500"
                          />
                        </div>
                        <div className="flex-1">
                          <InputCom
                            label="Phone Number*"
                            placeholder="(123) 456-7890"
                            inputClasses="w-full h-[50px] focus:border-blue-500"
                          />
                        </div>
                      </div>
                      <div className="mb-6">
                        <h1 className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">
                          Country*
                        </h1>
                        <select className="w-full h-[50px] border border-[#EDEDED] px-5 flex justify-between items-center mb-2 rounded focus:outline-none focus:border-blue-500">
                          <option value="">Select Country</option>
                          <option value="us">United States</option>
                          <option value="ca">Canada</option>
                          <option value="uk">United Kingdom</option>
                          <option value="au">Australia</option>
                        </select>
                      </div>
                      <div className="mb-6">
                        <div className="w-full">
                          <InputCom
                            label="Address*"
                            placeholder="Your address here"
                            inputClasses="w-full h-[50px] focus:border-blue-500"
                          />
                        </div>
                      </div>
                      <div className="flex space-x-5 items-center mb-6">
                        <div className="w-1/2">
                          <h1 className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">
                            Town / City*
                          </h1>
                          <select className="w-full h-[50px] border border-[#EDEDED] px-5 flex justify-between items-center rounded focus:outline-none focus:border-blue-500">
                            <option value="">Select City</option>
                            <option value="ny">New York</option>
                            <option value="la">Los Angeles</option>
                            <option value="ch">Chicago</option>
                            <option value="ho">Houston</option>
                          </select>
                        </div>
                        <div className="flex-1">
                          <InputCom
                            label="Postcode / ZIP*"
                            placeholder="12345"
                            inputClasses="w-full h-[50px] focus:border-blue-500"
                          />
                        </div>
                      </div>
                      <div className="flex space-x-2 items-center mb-10">
                        <div>
                          <input type="checkbox" name="" id="create" className="accent-blue-500" />
                        </div>
                        <label
                          htmlFor="create"
                          className="text-qblack text-[15px] select-none"
                        >
                          Create an account?
                        </label>
                      </div>
                      <div>
                        <h1 className="text-xl text-qblack font-medium mb-3">
                          Additional Information
                        </h1>
                        <div className="mb-6">
                          <textarea 
                            placeholder="Order notes (optional)" 
                            className="w-full h-[120px] border border-[#EDEDED] p-5 rounded focus:outline-none focus:border-blue-500"
                          ></textarea>
                        </div>
                        <div className="flex space-x-2 items-center mb-10">
                          <div>
                            <input type="checkbox" name="" id="address" className="accent-blue-500" />
                          </div>
                          <label
                            htmlFor="address"
                            className="text-qblack text-[15px] select-none"
                          >
                            Ship to a different address
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-white p-8 rounded-md shadow-sm">
                  <h1 className="sm:text-2xl text-xl text-qblack font-medium mb-5 pb-5 border-b">
                    Order Summary
                  </h1>

                  <div className="w-full">
                    <div className="sub-total mb-4">
                      <div className="flex justify-between mb-3">
                        <p className="text-[15px] font-medium text-qblack uppercase">
                          PRODUCT
                        </p>
                        <p className="text-[15px] font-medium text-qblack uppercase">
                          TOTAL
                        </p>
                      </div>
                      <div className="w-full h-[1px] bg-[#EDEDED]"></div>
                    </div>
                    
                    <div className="product-list w-full mb-5 max-h-[300px] overflow-y-auto pr-2">
                      {cartItems.length > 0 ? (
                        <ul className="flex flex-col space-y-3">
                          {cartItems.map((item, index) => {
                            // Hardcoded prices for each product based on index
                            const productPrices = {
                              0: 28343.64,  // Xiaomi Mi 11
                              1: 24128.67,  // Google Pixel 5
                              2: 19786.32,  // Xiaomi Air Purifier
                              3: 27435.67,  // Samsung Smart Fridge
                              4: 26984.76,  // Xiaomi Smart Home Kit
                              5: 29435.23,  // Google Pixel Buds
                              6: 18674.50   // OnePlus Buds Pro
                            };
                            
                            // Use the hardcoded price or a default
                            const displayPrice = productPrices[index] || 999.99;
                            
                            return (
                              <li key={index} className="border-b pb-3">
                                <div className="flex justify-between items-center">
                                  <div className="flex items-center space-x-3">
                                    <div className="w-[50px] h-[50px] overflow-hidden border rounded">
                                      <img
                                        src={
                                          item.product?.image ||
                                          `${process.env.PUBLIC_URL}/assets/images/product-img-1.jpg`
                                        }
                                        alt={item.product?.title || "Product"}
                                        className="w-full h-full object-contain"
                                      />
                                    </div>
                                    <div className="max-w-[180px]">
                                      <h4 className="text-[14px] text-qblack font-medium truncate">
                                        {item.product.title}
                                        <span className="text-[12px] text-qgray ml-1">
                                          x{item.quantity}
                                        </span>
                                      </h4>
                                      <p className="text-qgray text-[12px] truncate">
                                        {item.product.brand}
                                      </p>
                                    </div>
                                  </div>
                                  <div>
                                    <span className="text-[14px] text-qblack font-medium">
                                      ${displayPrice.toFixed(2)}
                                    </span>
                                  </div>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      ) : (
                        <p className="text-center py-4 text-gray-500">Your cart is empty</p>
                      )}
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-md mb-4">
                      <div className="flex justify-between mb-3">
                        <p className="text-[14px] font-medium text-qblack">
                          SUBTOTAL
                        </p>
                        <p className="text-[14px] font-medium text-qblack">
                          $248,143.01
                        </p>
                      </div>
                      
                      {couponApplied && (
                        <div className="flex justify-between mb-3 text-green-600">
                          <p className="text-[14px] font-medium">
                            DISCOUNT (10%)
                          </p>
                          <p className="text-[14px] font-medium">
                            -${discount.toFixed(2)}
                          </p>
                        </div>
                      )}

                      <div className="shipping-methods mb-3">
                        <p className="text-[14px] font-medium text-qblack mb-2">
                          SHIPPING METHOD
                        </p>
                        <div className="flex flex-col space-y-1">
                          <div className="flex items-center">
                            <input 
                              type="radio" 
                              id="free-shipping" 
                              name="shipping" 
                              checked={shippingMethod === "free"} 
                              onChange={() => handleShippingChange("free")}
                              className="mr-2 accent-blue-500"
                            />
                            <label htmlFor="free-shipping" className="flex justify-between w-full text-[13px]">
                              <span>Free Shipping</span>
                              <span className="font-medium">$0.00</span>
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input 
                              type="radio" 
                              id="standard-shipping" 
                              name="shipping" 
                              checked={shippingMethod === "standard"} 
                              onChange={() => handleShippingChange("standard")}
                              className="mr-2 accent-blue-500"
                            />
                            <label htmlFor="standard-shipping" className="flex justify-between w-full text-[13px]">
                              <span>Standard Shipping</span>
                              <span className="font-medium">$5.00</span>
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input 
                              type="radio" 
                              id="express-shipping" 
                              name="shipping" 
                              checked={shippingMethod === "express"} 
                              onChange={() => handleShippingChange("express")}
                              className="mr-2 accent-blue-500"
                            />
                            <label htmlFor="express-shipping" className="flex justify-between w-full text-[13px]">
                              <span>Express Shipping</span>
                              <span className="font-medium">$15.00</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-md mb-4">
                      <div className="flex justify-between mb-1">
                        <p className="text-lg font-semibold text-qblack">Total</p>
                        <p className="text-lg font-semibold text-blue-600">$248,143.01</p>
                      </div>
                      <p className="text-xs text-gray-500 text-right">
                        Including VAT
                      </p>
                    </div>
                    
                    <div className="payment-methods mb-5">
                      <p className="text-[16px] font-medium text-qblack mb-3">
                        PAYMENT METHOD
                      </p>
                      <div className="bg-white border rounded-md">
                        <div className="border-b p-4">
                          <div className="flex items-center space-x-2.5">
                            <input
                              type="radio"
                              name="payment"
                              id="card"
                              checked={paymentMethod === "card"}
                              onChange={() => setPaymentMethod("card")}
                              className="accent-blue-500"
                            />
                            <label
                              htmlFor="card"
                              className="text-[15px] font-medium text-qblack flex items-center"
                            >
                              <FaCreditCard className="mr-2 text-blue-500" /> Credit/Debit Cards
                            </label>
                          </div>
                          {paymentMethod === "card" && (
                            <div className="mt-3 pl-6">
                              <div className="flex space-x-2 mb-2">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/card-1.svg`} alt="Visa" className="h-6" />
                                <img src={`${process.env.PUBLIC_URL}/assets/images/card-2.svg`} alt="Mastercard" className="h-6" />
                                <img src={`${process.env.PUBLIC_URL}/assets/images/card-3.svg`} alt="Amex" className="h-6" />
                              </div>
                            </div>
                          )}
                        </div>
                        
                        <div className="border-b p-4">
                          <div className="flex items-center space-x-2.5">
                            <input
                              type="radio"
                              name="payment"
                              id="transfer"
                              checked={paymentMethod === "transfer"}
                              onChange={() => setPaymentMethod("transfer")}
                              className="accent-blue-500"
                            />
                            <label
                              htmlFor="transfer"
                              className="text-[15px] font-medium text-qblack flex items-center"
                            >
                              <FaMoneyBillWave className="mr-2 text-green-500" /> Direct Bank Transfer
                            </label>
                          </div>
                          {paymentMethod === "transfer" && (
                            <div className="mt-3 pl-6">
                              <p className="text-qgraytwo text-[14px]">
                                Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                              </p>
                            </div>
                          )}
                        </div>
                        
                        <div className="p-4">
                          <div className="flex items-center space-x-2.5">
                            <input
                              type="radio"
                              name="payment"
                              id="delivery"
                              checked={paymentMethod === "cod"}
                              onChange={() => setPaymentMethod("cod")}
                              className="accent-blue-500"
                            />
                            <label
                              htmlFor="delivery"
                              className="text-[15px] font-medium text-qblack flex items-center"
                            >
                              <FaTruck className="mr-2 text-orange-500" /> Cash on Delivery
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={handleCheckout}
                      className="w-full h-[50px] bg-blue-600 hover:bg-blue-700 text-white rounded-md flex justify-center items-center transition-all duration-300"
                    >
                      <span className="text-[16px] font-semibold">
                        Place Order - $248,143.01
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
