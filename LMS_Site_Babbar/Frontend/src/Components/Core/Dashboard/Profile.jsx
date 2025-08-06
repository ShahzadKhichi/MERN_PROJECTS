import React from "react";
import CTAButton from "../HomePage/CTAButton";
import { useSelector } from "react-redux";
import { FaRegEdit } from "react-icons/fa";

const Profile = () => {
  const user = useSelector(({ profile }) => profile.user);
  const personalDetails_1 = [
    {
      label: "First Name",
      value: user.firstName,
    },

    {
      label: "Email",
      value: user.email,
    },
    {
      label: "Gender",
      value: user?.additionalDetails?.gender || "Add Gender",
    },
  ];
  const personalDetails_2 = [
    {
      label: "First Name",
      value: user.lastName,
    },
    {
      label: "Contact Number",
      value: user?.additionalDetails?.contactNumber || "Add Contact Number",
    },

    {
      label: "Date of Birth",
      value: user?.additionalDetails?.dateOfBirth || "Add Date of Birth",
    },
  ];

  console.log(user);

  return (
    <div className="flex  justify-center items-center w-full">
      <div className="flex flex-col gap-8 items-start w-[70%]">
        <div className="text-3xl py-6 text-white font-inter font-semibold">
          My Profile
        </div>
        <div className="flex bg-richblack-700 mt-4 rounded-lg py-8 items-center justify-between px-16 w-full">
          <div className="flex items-center gap-4">
            <img
              className="rounded-full"
              width={80}
              src={user.imageUrl}
              alt="Profile image"
            />
            <div className="flex flex-col gap-1">
              <h2 className="text-white font-inter font-semibold text-2xl">
                {user.firstName + " " + user.lastName}
              </h2>
              <p className="text-richblack-300 font-inter font-semibold">
                {user.email}
              </p>
            </div>
          </div>
          <CTAButton linkto={"/dashboard/settings"} active={true}>
            <div className="flex gap-2 items-center">
              Edit <FaRegEdit />
            </div>
          </CTAButton>
        </div>
        <div className="flex bg-richblack-700 rounded-lg py-8 justify-between px-16 w-full">
          <div className="flex flex-col gap-8">
            <h2 className="text-white font-inter font-bold text-lg">About</h2>
            <p className="font-inter text-richblack-300">
              {user?.additionalDetails?.about ||
                "write something about yourself."}
            </p>
          </div>
          <CTAButton linkto={"/dashboard/settings"} active={true}>
            <div className="flex gap-2 items-center">
              Edit <FaRegEdit />
            </div>
          </CTAButton>
        </div>
        <div className="flex bg-richblack-700 rounded-lg py-8 justify-between px-16 w-full">
          <div>
            <h2 className="text-white font-inter font-bold">
              Personal Details
            </h2>
            <div className="flex gap-16 mt-16">
              <div className="flex flex-col gap-4">
                {personalDetails_1.map((item, id) => (
                  <div className="" key={id}>
                    <p className="text-richblack-400 font-inter font-semibold">
                      {item.label}
                    </p>
                    <p className="text-richblack-5 font-inter font-semibold">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                {personalDetails_2.map((item, id) => (
                  <div className="" key={id}>
                    <p className="text-richblack-400 font-inter font-semibold">
                      {item.label}
                    </p>
                    <p className="text-richblack-5 font-inter font-semibold">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <CTAButton linkto={"/dashboard/settings"} active={true}>
            <div className="flex gap-2 items-center">
              Edit <FaRegEdit />
            </div>
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default Profile;
