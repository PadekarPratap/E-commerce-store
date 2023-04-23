import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import ItemInCart from "../components/ItemInCart";

const CartPage = () => {
  const cart = useSelector((state) => state.Cart.cart);

  const getTotalPrice = () =>{
    return cart.reduce((acc, value) =>{
          acc += value.price * value.quantity
          return Math.ceil(acc)
    }, 0)
  }

  return (
    <div className="bg-gray-100 min-h-[100vh]">
      <Navbar />
      <div className="container mx-auto px-5 mt-[2.5rem] pb-[2.5rem]">
        <div className="max-w-[950px] mx-auto bg-white px-8 py-5 rounded-md ">
          <div>
            {cart.length > 0 ? (
              <h1 className="text-3xl md:text-4xl font-mono font-semibold">
                Shopping Cart
              </h1>
            ) : (
              <h1 className="text-3xl md:text-4xl font-mono font-semibold">
                Your shopping cart is empty
              </h1>
            )}
          </div>
          {cart.length > 0 && (
            <>
              <div className="mt-3 text-right hidden sm:block">Price</div>
              <hr />
            </>
          )}

          <div>
            {cart.length > 0 &&
              cart.map((cartItem) => (
                <ItemInCart key={cartItem._id} cartItem={cartItem} />
              ))}
          </div>
          {cart.length > 0 && <div className="bg-blue-100 py-2 px-2 rounded-lg flex justify-between">
              <div>
                <p className="text-xl font-bold">Total Price:</p>
              </div>
              <div className="text-xl font-bold">&#8377;{getTotalPrice()}</div>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
