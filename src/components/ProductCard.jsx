import React from "react";

const ProductCard = ({ product }) => {
  const { description, image, mrp, price, productName } = product;
  return (
    <div className="border border-[#f5f5f5] shadow-md shadow-black/20 rounded">
      {/* product image */}
      <div>
        <img
          className="rounded-t w-full h-[200px] object-cover object-center cursor-pointer"
          src={"http://rjtmobile.com/grocery/images/" + image}
          alt={image}
        />
      </div>

      <div className="p-4">
        <h3 className="text-center font-bold text-xl font-mono cursor-pointer hover:text-orange-500">
          {productName}
        </h3>
        <p>{description.slice(0, 65)}...</p>
        <p className="cursor-pointer flex justify-center mt-5">
          <span>₹</span>
          <span className="text-3xl">{price}</span>
        </p>
        <span className="text-lg block text-center text-gray-500">
          <del>₹{mrp}</del>
        </span>
        {mrp && (
            <div className="text-center mt-3">
          <span className="inline-block bg-green-500 py-1 px-3 rounded text-white">
            save {Math.ceil((((mrp - price) / mrp) * 100))}%
          </span>
            </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
