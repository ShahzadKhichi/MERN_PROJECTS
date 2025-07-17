import frame from "../../../assets/Images/frame.png";
import CTAButton from "../HomePage/CTAButton";
import Input from "../../Common/Input";
import InputPassword from "../../Common/InputPassword";

import HighlightText from "../HomePage/HighlightText";

const Template = ({ image, Form }) => {
  return (
    <div className="flex w-full justify-center items-center  h-[90vh] mt-10">
      <div className="w-11/12  h-[80vh] flex justify-center  max-w-maxContent">
        <div className="w-[50%] h-[100%]  flex flex-col gap-5">{Form()}</div>
        <div className="w-[50%] h-[100%] relative">
          <div className="absolute top-3 left-3 w-[70%]">
            <img src={frame} alt="" />
          </div>
          <div className=" absolute top-0 left-0 w-[70%]">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
