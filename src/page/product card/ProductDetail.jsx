import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../store/products/cartSlice";

function ProductDetail() {
  const selectedProduct = useSelector((state) => state.product.selectedProduct);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCart = () => {
    if (selectedProduct) {
      dispatch(addToCart(selectedProduct)); // ✅ add product to cart
      navigate("/product/cart"); // ✅ navigate to cart page
      console.log("Added to cart:", selectedProduct);
    }
  };

  if (!selectedProduct) {
    return (
      <div className="flex items-center justify-center min-h-screen px-10 bg-gray-100">
        <div className="text-center">
          <p className="text-red-600 font-semibold text-lg">
            No product selected.
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-6 py-2 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white rounded-lg shadow hover:opacity-90 transition"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      {/* Left: Full Image */}
      <div className="lg:w-1/2 w-full h-80 lg:h-auto">
        <img
          src={selectedProduct.img}
          alt={selectedProduct.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right: Product Details */}
      <div className="lg:w-1/2 w-full flex flex-col justify-center px-8 py-12 bg-white shadow-lg">
        <div className="max-w-lg mx-auto">
          <h2 className="text-4xl font-bold text-gray-900">
            {selectedProduct.name}
          </h2>
          <p className="text-2xl text-red-600 font-semibold mt-3">
            {selectedProduct.price}
          </p>

          <p className="text-gray-600 mt-6 leading-relaxed text-lg">
            Treat yourself with our freshly prepared{" "}
            <span className="font-semibold">{selectedProduct.name}</span>. Made
            with the finest ingredients and crafted to perfection, it’s the
            perfect choice for any time of the day. 😋
          </p>

          {/* Buttons */}
          <div className="mt-10 flex gap-6">
            <button
              onClick={handleCart} // ✅ correctly call function
              className="flex-1 px-6 py-3 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white font-semibold rounded-xl shadow hover:scale-105 transform transition"
            >
              Add to Cart 🛒
            </button>
            <button
              onClick={() => navigate("/home")}
              className="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-xl shadow hover:bg-gray-300 transition"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
