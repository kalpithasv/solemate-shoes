import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartActions } from '../store/cart-slice';
import { useDispatch } from 'react-redux';
import { BsDash, BsPlus, BsTrash3 } from 'react-icons/bs';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../utils/firebase';
import { orderActions } from '../store/order-slice';
import cartImg from '../assets/cart.png';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const { orders } = useSelector((state) => state.order);

  const incrementQuantity = (item) => {
    const id = item.id;
    const size = item.size;
    const quantity = 1;
    const price = item.price;
    const itemToAdd = { id, size, quantity, price };
    dispatch(cartActions.addItemToCart(itemToAdd));
  };

  const decrementQuantity = (id, size) => {
    const itemToRemove = { id, size };
    dispatch(cartActions.removeItemFromCart(itemToRemove));
  };

  const removeItem = (item) => {
    dispatch(cartActions.removeItemFromCartBySize(item));
  };

  const placeOrder = async () => {
    await setDoc(
      doc(db, 'users', user.uid),
      {
        orders: [...orders, { items, totalPrice }],
      },
      { merge: true }
    );
    dispatch(cartActions.clearCart());
    await getOrders();
  };

  const getOrders = async () => {
    const docRef = doc(db, 'users', user.uid);
    const docSnap = await getDoc(docRef);
    dispatch(orderActions.clearOrders());
    dispatch(orderActions.setOrders(docSnap.data().orders));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8 text-center py-6">Cart</h1>
      {items.length === 0 ? (
        <div className="flex justify-center flex-col space-y-5">
          <img src={cartImg} alt="empty cart" className="w-24 mx-auto" />
          <p className="text-center text-gray-600 text-xl mt-4">
            Your cart is empty
          </p>
          <button className="px-4 py-2 outline outline-2 flex mx-auto justify-center w-fit rounded-lg ">
            <Link to="/shop" className="text-blue-500 font-bold">
              Go to shop
            </Link>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-12 space-x-10">
          <div className="col-span-8">
            {items.map((item, index) => (
              <div
                className="flex items-center justify-between mb-4"
                key={index}>
                <div className="flex items-center space-x-2">
                  <div>
                    <img src={item.imageURL} alt={item.name} className="w-24" />
                  </div>
                  <div>
                    <Link to={`/shop/${item.id}`}>
                      <h2 className="text-lg font-bold">{item.name}</h2>
                    </Link>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    <p className="text-gray-600">Size: {item.size}</p>
                  </div>
                </div>

                <div>
                  <div className=" flex outline outline-2 outline-blue-500 items-center space-x-5 rounded-md px-2 py-2 ">
                    <button
                      onClick={() => decrementQuantity(item.id, item.size)}
                      className="p-[0.15rem]  bg-blue-500  text-white text-xl rounded-md">
                      <BsDash />
                    </button>
                    <p className="text-base text-gray-800 flex ">
                      {item.quantity}
                    </p>
                    <button
                      onClick={() => incrementQuantity(item)}
                      className="p-[0.15rem]  bg-blue-500  text-white text-xl rounded-md ">
                      <BsPlus />
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => removeItem(item)}
                  className="text-red-500 font-bold text-2xl">
                  <BsTrash3 />
                </button>
              </div>
            ))}
          </div>
          <div className="col-span-4">
            <div className="bg-gray-100 p-4 rounded">
              <h2 className="text-lg font-bold mb-4">Summary</h2>
              <p className="text-gray-600 mb-2">Total items: {items.length}</p>
              <p className="text-gray-600 mb-4">
                Total price: ${totalPrice.toFixed(2)}
              </p>
              <button
                onClick={() => placeOrder()}
                className="bg-blue-500 text-white px-4 py-2 rounded font-bold">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
