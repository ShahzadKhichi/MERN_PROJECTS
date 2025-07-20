import React from "react";
import ContactUsForm from "../ContactUsPage/ContactUsForm";

const ContactForm = () => {
  return (
    <div className="mx-auto flex flex-col gap-4  mt-52    items-center">
      <h1 className="text-4xl text-richblack-5  font-bold font-inter ">
        Get in Touch
      </h1>
      <p className="text-richblue-50 mb-10">
        We'd love to here for you, Please fill out this form.
      </p>
      <div className="mt-10 w-full">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactForm;
