import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "../../Common/Input";
import CTAButton from "../HomePage/CTAButton";
import CountryCode from "../../../data/countrycode.json";

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm();

  const handleFormSubmit = async (data) => {
    console.log(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        number: "",
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col gap-4 w-full"
    >
      <div className=" flex   gap-4 ">
        <div className="w-[50%]">
          <Input
            label={"First Name"}
            required={true}
            placeholder={"Enter first name"}
            name={"firstname"}
            id={"firstname"}
            {...register("firstname", { required: true })}
          />
        </div>
        <div className="w-[50%]">
          <Input
            label={"Last Name"}
            placeholder={"Enter last name"}
            name={"lastname"}
            id={"lastname"}
            {...register("lastname")}
          />
        </div>
      </div>
      <Input
        label={"Email Address"}
        placeholder={"Enter email address"}
        name={"email"}
        required={true}
        id={"email"}
        {...register("email", { required: true })}
      />

      <div className="flex flex-col ">
        <label htmlFor="dropdwon" className="text-richblack-5 font-semibold">
          Phone number
        </label>
        <div className="flex items-center gap-2">
          <div className="flex flex-col w-[80px] ">
            {" "}
            <select
              name="dropdown"
              id="dropdown"
              {...register("countryCode", { required: true })}
              className="bg-richblack-600 text-richblack-200 mt-1 rounded-lg py-4 border-b-2 px-2 font-semibold font-inter  border-richblack-200 selection:text-richblack-200 placeholder:text-richblack-200"
            >
              {CountryCode.map((item, id) => (
                <option
                  value={item.code}
                  key={id}
                  className="text-richblack-200 placeholder:text-richblack-200"
                >
                  {item.code}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full">
            <Input
              label={""}
              placeholder={"123456789"}
              name={"number"}
              id={"number"}
              {...register("number", { required: true })}
            />
          </div>
        </div>
      </div>

      <Input
        type={"text-area"}
        rows={"7"}
        cols={"30"}
        required={true}
        label={"Message"}
        placeholder={"Enter you message"}
        name={"message"}
        id={"message"}
        {...register("message", { required: true })}
      />
      <CTAButton onClick={handleSubmit(handleFormSubmit)} active={true}>
        Send Message
      </CTAButton>
    </form>
  );
};

export default ContactUsForm;
