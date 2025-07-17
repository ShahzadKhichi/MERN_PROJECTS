import { useState } from "react";
import CTAButton from "../HomePage/CTAButton";
import Input from "../../Common/Input";
import InputPassword from "../../Common/InputPassword";
import { toast } from "react-hot-toast";
import HighlightText from "../HomePage/HighlightText";

const LoginForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.password || !data.email) {
      toast.error("All fileds are required");
    }
  };

  return (
    <div className="w-[70%] flex flex-col gap-5 justify-center ">
      <div className="text-4xl font-inter font-bold text-white">
        Welcome Back
      </div>
      <div className="text-richblack-50">
        Build skills for today,tomorrow, and beyond.
        <span className="font-inter italic ">
          <HighlightText text={" Education to future-proof your career"} />
        </span>
      </div>
      <div>
        <form>
          <div className="flex flex-col gap-4">
            <div>
              <Input
                onChange={(e) => setData({ ...data, email: e.target.value })}
                value={data.email}
                type={"text"}
                placeholder={"Enter email address"}
                label={"Email Address"}
              />
            </div>
            <div className="relative pb-8">
              <InputPassword
                onChange={(e) => setData({ ...data, password: e.target.value })}
                value={data.password}
                placeholder={"Enter password"}
                label={"Password"}
              />
              <button className="text-blue-100 absolute bottom-0 right-0">
                Forget Password
              </button>
            </div>

            <div>
              <CTAButton active={true} onClick={handleSubmit}>
                Sign in
              </CTAButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
