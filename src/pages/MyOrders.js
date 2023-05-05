import React from 'react';
import { useSelector } from 'react-redux';
import cartImg from '../assets/cart.png';

const MyOrders = () => {
  const { orders } = useSelector((state) => state.order);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#eee] py-6">
      <h1 className="text-center pb-6 text-xl">My Orders</h1>
      {orders.length === 0 ? (
        <div>
          <img src={cartImg} alt="empty cart" />
        </div>
      ) : (
        <div className="flex flex-col gap-10">
          {orders.map((order, index) => (
            <div
              key={index}
              className="grid grid-cols-12 gap-5 bg-[#aaa]/10 hover:bg-[#aaa]/20 transition-all duration-300 shadow-md rounded-lg px-6 py-6">
              <div className="col-span-2  flex space-x-2 ">
                <span>Order Number</span>
                <span>{index + 1}</span>
              </div>
              <div className="col-span-10  ">
                <div className="flex justify-between ">
                  <div className="flex flex-col space-y-5">
                    {order.items.map((item) => (
                      <div key={item.id * 10} className=" flex space-x-20 ">
                        <img
                          src={item.imageURL}
                          alt="shoe"
                          className="w-36 h-24 object-cover rounded-lg"
                        />
                        <div>
                          <h1>
                            Name: <span>{item.name}</span>
                          </h1>
                          <h1>
                            Price: <span>{item.price}$</span>
                          </h1>
                          <h1>
                            Quantity: <span>{item.quantity}</span>
                          </h1>
                          <h1>
                            Size: <span>{item.size}</span>
                          </h1>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex space-x-5 items-end">
                    <div>
                      <h1>
                        Total: <span>{order.totalPrice}</span>$
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
