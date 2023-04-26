import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [totalPrice, setTotalPrice] = useState(0);

  // Calculate total price of all items in cart
  const calculateTotalPrice = () => {
   // let total = 0;
   // cartItems.forEach((item) => {
     // total += item.price * item.quantity;
  //  });
  //  setTotalPrice(total);
  };

  // Update quantity of an item in cart
  const handleQuantityChange = (event, index) => {
    // const newItems = [...cartItems];
    // newItems[index].quantity = event.target.value;
    // setCartItems(newItems);
   // calculateTotalPrice();
  };

  // Remove an item from cart
  const handleRemoveItem = (index) => {
    // const newItems = [...cartItems];
   //  newItems.splice(index, 1);
    // setCartItems(newItems);
    // calculateTotalPrice();
  };

  return (
    <div className="max-w-screen-lg mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8">
            {cartItems.map((item, index) => (
              <div className="flex items-center justify-between mb-4" key={index}>
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-24" />
                  <div>
                    <Link to={`/products/${item.id}`}>
                      <h2 className="text-lg font-bold">{item.name}</h2>
                    </Link>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    <div className="flex items-center mt-2">
                      <label htmlFor={`quantity-${index}`} className="mr-2">
                        Quantity:
                      </label>
                      <input
                        type="number"
                        id={`quantity-${index}`}
                        className="w-16 border border-gray-300 rounded px-2 py-1"
                        value={item.quantity}
                        min="1"
                        max="10"
                        onChange={(event) => handleQuantityChange(event, index)}
                      />
                    </div>
                  </div>
                </div>
                <button
                  className="text-red-500 font-bold"
                  onClick={() => handleRemoveItem(index)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="col-span-4">
            <div className="bg-gray-100 p-4 rounded">
              <h2 className="text-lg font-bold mb-4">Summary</h2>
              <p className="text-gray-600 mb-2">Total items: {cartItems.length}</p>
              <p className="text-gray-600 mb-4">Total price: ${totalPrice.toFixed(2)}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded font-bold">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


