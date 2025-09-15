import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromCart, updateQuantity, clearCart } from "../../store/products/cartSlice";
import Footer from "../../components/footer/Footer";

function CartPage() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price.replace("$", "") * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    dispatch(clearCart());
  };

  return (
    <>
      {/* Order Placed Overlay */}
      {orderPlaced && (
        <div className="fixed inset-0 bg-green-600 z-50 flex flex-col justify-center items-center text-white text-center px-4 animate-fadeIn">
          <h1 className="text-5xl font-bold mb-4 animate-bounce">🎉 Order Placed!</h1>
          <p className="text-lg mb-6">Thank you for your purchase.</p>
          <button
            onClick={() => {
              setOrderPlaced(false);
              navigate("/home");
            }}
            className="px-8 py-3 bg-white text-green-600 font-semibold rounded-lg shadow hover:scale-105 transform transition"
          >
            Back to Products
          </button>
        </div>
      )}

      <div className="min-h-screen bg-gray-50 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">🛒 Your Cart</h2>

        {cart.length === 0 ? (
          <div className="text-center py-20 bg-white shadow rounded-lg">
            <p className="text-gray-600 text-lg">Your cart is empty!</p>
            <button
              onClick={() => navigate("/")}
              className="mt-6 px-6 py-2 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white font-semibold rounded-lg shadow hover:scale-105 transform transition"
            >
              Back to Products
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            {/* Desktop Table */}
            <div className="hidden md:block">
              <table className="w-full border-collapse">
                <thead className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Product</th>
                    <th className="py-3 px-4">Price</th>
                    <th className="py-3 px-4">Quantity</th>
                    <th className="py-3 px-4">Total</th>
                    <th className="py-3 px-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id} className="border-b hover:bg-gray-50 transition">
                      <td className="py-4 px-4 flex items-center gap-3">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg shadow"
                        />
                        <span className="font-medium text-gray-800">{item.name}</span>
                      </td>
                      <td className="py-4 px-4 text-center">{item.price}</td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() =>
                              dispatch(updateQuantity({ id: item.id, type: "decrease" }))
                            }
                            className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                          >
                            −
                          </button>
                          <span className="min-w-[24px] text-center">{item.quantity}</span>
                          <button
                            onClick={() =>
                              dispatch(updateQuantity({ id: item.id, type: "increase" }))
                            }
                            className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center font-semibold text-gray-700">
                        ${(item.price.replace("$", "") * item.quantity).toFixed(2)}
                      </td>
                      <td className="py-4 px-4 text-center">
                        <button
                          onClick={() => dispatch(removeFromCart(item.id))}
                          className="px-3 py-1 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile View */}
            <div className="grid gap-4 md:hidden p-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-4 bg-gray-50 p-4 rounded-lg shadow hover:shadow-md transition"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg shadow"
                    />
                    <div>
                      <p className="font-medium text-gray-800">{item.name}</p>
                      <p className="text-gray-500">{item.price}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-2 mb-2">
                      <button
                        onClick={() =>
                          dispatch(updateQuantity({ id: item.id, type: "decrease" }))
                        }
                        className="px-2 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          dispatch(updateQuantity({ id: item.id, type: "increase" }))
                        }
                        className="px-2 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                    <p className="font-semibold text-gray-700">
                      ${(item.price.replace("$", "") * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="mt-2 px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Sticky Footer */}
            <div className="sticky bottom-0 bg-white border-t flex flex-row justify-end items-center gap-4 px-6 py-4">
              <p className="text-xl font-semibold text-gray-800 mr-auto">
                Total: ${totalPrice.toFixed(2)}
              </p>
              <button
                onClick={() => navigate("/home")}
                className="px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow hover:bg-gray-300 transition"
              >
                Continue Shopping
              </button>
              <button
                onClick={handlePlaceOrder}
                className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold rounded-lg shadow hover:scale-105 transform transition animate-pulse"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default CartPage;
