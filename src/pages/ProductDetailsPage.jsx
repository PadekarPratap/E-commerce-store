import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { BASE_URL, IMAGE_URL, fetchAPIData } from "../utils/api";
import { endpoints } from "../utils/endpoints";
import { useParams } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../redux/slices/cartSlice";
import { BsCheck2Square } from "react-icons/bs";
import { toast } from "react-hot-toast";

const ProductDetailsPage = () => {
  const { _id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.Cart.cart);
  const isItemNotAddedToCart =
    cart.findIndex((item) => item._id === product._id) === -1;

  const getProducts = async () => {
    try {
      const res = await axios.get(BASE_URL + endpoints.PRODUCT_DETAILS + _id);
      // console.log(res);
      setProduct(res.data.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <div>
        <Navbar />
        <div className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <PulseLoader
            color="#35d3b4"
            loading={isLoading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-600 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-5 mt-12">
        <div className="grid md:grid-cols-2 gap-[2rem] border-2 border-gray-950 bg-white rounded-lg">
          <div>
            <img
              className="rounded-lg w-full max-h-[500px] object-cover object-center"
              src={IMAGE_URL + product.image}
              alt={product.productName}
            />
          </div>
          <div className="p-[2rem]">
            <h1 className="text-xl md:text-2xl font-bold font-mono text-center md:text-left">
              {product.productName}
            </h1>
            <p className="text-gray-700 mt-3">{product.description}</p>
            <div className="flex space-x-4 items-center my-5 justify-center md:justify-start">
              <span className="text-2xl font-semibold">
                &#8377;{product.price}
              </span>
              <span className="text-gray-500">
                <del>&#8377;{product.mrp}</del>
              </span>
              <span className="bg-green-500 px-2 text-white rounded">
                save{" "}
                {Math.ceil(((product.mrp - product.price) / product.mrp) * 100)}
                %
              </span>
            </div>
            <div className="text-center md:text-left space-y-3 md:space-x-3">
              <button
                onClick={() => {
                  dispatch(ADD_TO_CART(product));
                  toast.success(
                    "Item has been successfully added to your Cart"
                  );
                }}
                className="inline-flex gap-3 items-center px-4 py-2 bg-orange-500 text-white rounded-sm"
              >
                {isItemNotAddedToCart ? null : <BsCheck2Square size={13} />}
                {isItemNotAddedToCart ? "Add to Cart" : `Added to Cart`}
              </button>
              <button
                onClick={() => {
                  dispatch(REMOVE_FROM_CART(product));
                  toast.success(
                    "The item has been successfully removed from the cart"
                  );
                }}
                disabled={isItemNotAddedToCart}
                className={`px-4 py-2 ${
                  isItemNotAddedToCart ? "bg-gray-200" : "bg-black"
                } text-white rounded-sm`}
              >
                Remove from Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
