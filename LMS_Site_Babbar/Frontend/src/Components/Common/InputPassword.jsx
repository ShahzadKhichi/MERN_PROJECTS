import React, { useState } from "react";
import Input from "./Input";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const InputPassword = ({ onChange, placeholder, label, value, required }) => {
  const [visible, setVisible] = useState(false);
  const onIconClick = () => {
    setVisible(!visible);
  };
  return (
    <div className="relative">
      <div>
        <Input
          value={value}
          type={visible ? "text" : "password"}
          onChange={onChange}
          placeholder={placeholder}
          label={label}
          required={required}
        />
      </div>
      <div
        className="absolute top-[50%] right-2 text-2xl text-richblack-5 "
        onClick={onIconClick}
      >
        {!visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
      </div>
    </div>
  );
};

export default InputPassword;
