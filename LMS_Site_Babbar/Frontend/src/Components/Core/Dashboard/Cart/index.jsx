import React from "react";
import { useSelector } from "react-redux";
import RenderCartCourses from "./RenderCartCourses";
import RenderTotalAmount from "./RenderTotalAmount";

const Cart = () => {
  const { items, totalItems } = useSelector(({ cart }) => cart);
  console.log(items, totalItems);

  return (
    <div className="text-white">
      <h1>Your Cart</h1>
      <p>{totalItems} courses in Cart</p>
      {items > 0 ? (
        <div>
          <RenderCartCourses />
          <RenderTotalAmount />
        </div>
      ) : (
        <div>Your Cart is Empty</div>
      )}
    </div>
  );
};

export default Cart;
