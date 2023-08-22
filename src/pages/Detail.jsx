import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productsActionDetail } from "../redux/actions/products";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import { productsCard } from "../redux/actions/card";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  const increment = (stock) => {
    if (count <= stock) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const addCard = () => {
    dispatch(productsCard(id, count));
    dispatch({ type: "DRAWER", payload: true });
  };

  const { products } = useSelector((state) => state.detail);
  console.log(products);

  useEffect(() => {
    dispatch(productsActionDetail(id));
  }, [dispatch]);
  return (
    <div className="w-full flex items-center justify-center space-x-10 ">
      <img className="w-1/3" src={products?.image} alt="" />
      <div className="w-2/3 space-y-6">
        <div className="font-bold text-2xl">{products?.title}</div>
        <div className="opacitiy-70  text-sm ">{products?.description}</div>
        <div className="opacity-70 ">Category: {products?.category}</div>
        <div className="opacity-70 ">Rate: {products?.category}</div>
        <div className="opacity-70 ">
          Category: {products?.rating?.rate} - Stock: {products?.rating?.count}
        </div>
        <div className="font-bold text-2xl ">Price: {products?.price}TL</div>
        <div className="flex items-center space-x-4">
          <CgMathMinus
            onClick={decrement}
            className="cursor-pointer border rounded-full p-1"
            size={30}
          />
          <span>{count}</span>
          <CgMathPlus
            onClick={() => increment(products?.rating?.count)}
            className="cursor-pointer border rounded-full p-1"
            size={30}
          />
        </div>
        <button
          onClick={addCard}
          className="p-3 w-full bg-indigo-600 text-center rounded-lg text-lg text-white"
        >
          Sepete ekle
        </button>
      </div>
    </div>
  );
};

export default Detail;
