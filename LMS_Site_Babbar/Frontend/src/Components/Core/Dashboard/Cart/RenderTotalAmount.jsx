import React from "react";
import CTAButton from "../../HomePage/CTAButton";

const RenderTotalAmount = () => {
  const discount = false;
  return (
    <div>
      <p>Total</p>
      <p>4050</p>
      {discount && <p className="">3450</p>}
      <CTAButton>Buy Now</CTAButton>
    </div>
  );
};

export default RenderTotalAmount;
