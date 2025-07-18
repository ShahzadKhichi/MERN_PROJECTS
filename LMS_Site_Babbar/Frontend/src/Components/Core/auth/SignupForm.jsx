import { useState } from "react";
import CTAButton from "../HomePage/CTAButton";
import Input from "../../Common/Input";
import InputPassword from "../../Common/InputPassword";
import { toast } from "react-hot-toast";
import HighlightText from "../HomePage/HighlightText";
import { sendOTP } from "../../../services/APIS/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [role, setRole] = useState("Student");
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    accountType: "Student",
    password: "",
    confirmPassword: "",
  });

  console.log(data);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !data.confirmPassword ||
      !data.password ||
      !data.email ||
      !data.accountType ||
      !data.firstName ||
      !data.lastName
    ) {
      toast.error("All fileds are required");
    }

    await sendOTP(data, navigate, dispatch);
  };

  const toggleRole = (e, accountType) => {
    e.preventDefault();
    setData({ ...data, accountType });
    setRole(accountType);
  };

  return (
    <div className="w-[70%] flex flex-col gap-5 justify-center ">
      <div className="text-4xl font-inter font-bold text-white">
        Join the millions learning to code with StudyNotion for free
      </div>
      <div className="text-richblack-50">
        Build skills for today,tomorrow, and beyond.
        <span className="font-inter italic ">
          <HighlightText text={" Education to future-proof your career"} />
        </span>
      </div>
      <div>
        <form>
          <div className="flex flex-col gap-5">
            {/* role handler */}
            <div className="flex bg-richblack-700 rounded-full w-fit gap-0 px-1 py-1 border-b-2 border-richblack-400 ">
              <button
                onClick={(e) => toggleRole(e, "Student")}
                className={`px-5 py-3  text-white   rounded-full ${
                  role == "Student" ? "bg-richblack-900" : ""
                }`}
              >
                Student
              </button>
              <button
                onClick={(e) => toggleRole(e, "Instructor")}
                className={`px-5 py-3 text-white  rounded-full  ${
                  role == "Instructor" ? "bg-richblack-900" : ""
                } `}
              >
                Instructor
              </button>
            </div>
            {/* firstName lastName handler */}
            <div className="flex gap-4">
              <div className="w-full">
                <Input
                  onChange={(e) =>
                    setData({ ...data, firstName: e.target.value })
                  }
                  value={data.firstName}
                  type={"text"}
                  placeholder={"Enter first name"}
                  label={"First Name"}
                />
              </div>
              <div className="w-full">
                <Input
                  onChange={(e) =>
                    setData({ ...data, lastName: e.target.value })
                  }
                  value={data.lastName}
                  type={"text"}
                  placeholder={"Enter last name"}
                  label={"Last Name"}
                />
              </div>
            </div>
            <div>
              <Input
                onChange={(e) => setData({ ...data, email: e.target.value })}
                value={data.email}
                type={"text"}
                placeholder={"Enter email address"}
                label={"Email Address"}
              />
            </div>
            <div className="flex gap-4">
              <div className=" w-full">
                <InputPassword
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  value={data.password}
                  type={"text"}
                  placeholder={"Enter password"}
                  label={"Create Password"}
                />
              </div>
              <div className="w-full">
                <InputPassword
                  onChange={(e) =>
                    setData({ ...data, confirmPassword: e.target.value })
                  }
                  value={data.confirmPassword}
                  placeholder={"Confirm password"}
                  label={"Confirm Password"}
                />
              </div>
            </div>
            <div>
              <CTAButton active={true} onClick={handleSubmit}>
                Create Account
              </CTAButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
