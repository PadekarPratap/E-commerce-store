import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { IMAGE_URL, fetchAPIData } from "../utils/api";
import { endpoints } from "../utils/endpoints";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const {_id} = useParams()
  const [product, setProduct] = useState({});

  const getProducts = async () => {
    const res = await fetchAPIData(endpoints.PRODUCT_DETAILS + _id);
    console.log(res);
    setProduct(res.data.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="bg-gray-600 h-screen">
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
              <span className="text-2xl font-semibold">&#8377;{product.price}</span>
              <span className="text-gray-500"><del>&#8377;{product.mrp}</del></span>
              <span className="bg-green-500 px-2 text-white rounded">save {Math.ceil(((product.mrp - product.price) / product.mrp) * 100)}%</span>
            </div>
            <div className="text-center md:text-left">
            <button className="px-4 py-2 bg-orange-500 text-white rounded-md ">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
