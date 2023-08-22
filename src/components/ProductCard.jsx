import React from "react";

const ProductCard = ({ prd }) => {
  return (
    <div className="w-1/5 h-[350px] border rounded-lg m-2 p-2 flex flex-col items-center justify-center space-y-2 ">
      <img
        onClick={() => (window.location = `detail/${prd.id}`)}
        src={prd?.image}
        className="h-32 object-cover"
        alt=""
      />
      <div className="font-bold text-center mt-2">
        {(prd?.title).substring(0, 35)}...
      </div>
      <div className="text-center opacitiy-70 text-sm">
        {(prd?.description).substring(0, 45)}...
      </div>
      <div className="font-bold text-lg">{prd?.price}</div>
      <button className="bg-indigo-600 w-full p-2 rounded-lg">
        SEPETE EKLE
      </button>
    </div>
  );
};

export default ProductCard;
