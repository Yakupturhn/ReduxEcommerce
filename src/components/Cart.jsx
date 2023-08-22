import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../redux/actions/card";

const Cart = () => {
  const dispatch = useDispatch();
  const { cardItems } = useSelector((state) => state.card);
  console.log(cardItems);
  const deleteCard = (id) => {
    dispatch(removeCart(id));
  };
  return (
    <div className="w-1/3 h-full border fixed top-0 right-0 z-50 bg-white">
      <div className="flex items-center h-20 justify-between p-3">
        <h1 className="text-2xl">SEPETİM</h1>
        <AiOutlineClose
          onClick={() => dispatch({ type: "DRAWER", payload: false })}
          size={25}
          className="cursor-pointer"
        />
      </div>
      {cardItems?.map((card, i) => (
        <div key={i} className="h-28 flex items-center justify-between p-3">
          <img src={card?.image} alt="" className="h-24" />
          <div className="w-44">
            <div className="font-bold text-sm">
              {card?.title.substring(0, 10)}... ({card?.qty})
            </div>
            <div className="opacity-70 text-xs">
              {card?.description.substring(0, 10)}...
            </div>
          </div>
          <div className="font-bold text-lg">{card?.price}</div>
          <div
            onClick={() => deleteCard(card.id)}
            className="bg-red-500 w-20 text-white rounded-lg p-2 cursor-pointer text-center"
          >
            Sil
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
