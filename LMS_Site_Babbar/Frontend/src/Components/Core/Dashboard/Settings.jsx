import React from "react";
import { useSelector } from "react-redux";
import CTAButton from "../HomePage/CTAButton";
import {
  FaCloudUploadAlt,
  FaBasketballBall,
  FaDrumSteelpan,
} from "react-icons/fa";

import { VscTrash } from "react-icons/vsc";
import { useRef } from "react";
import { useState } from "react";
import Input from "../../Common/Input";

const Settings = () => {
  const ppRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const user = useSelector(({ profile }) => profile.user);
  const [details, setDetails] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    dateOfBirth: user.additionalDetails.dateofBirth || "",
    gender: user.additionalDetails.gender || "",
    about: user.additionalDetails.about || "",
    contactNumber: user.additionalDetails.contactNumber || "",
  });
  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
  });

  return (
    <div className="flex  justify-center items-center w-full">
      <div className="flex flex-col gap-8 items-start w-[70%] py-8">
        <div className="text-3xl py-6 text-white font-inter font-semibold">
          Edit Profile
        </div>
        <div className="flex bg-richblack-700 mt-4 rounded-lg py-8 items-center justify-between px-16 w-full">
          <div className="flex items-center gap-4">
            <img
              className="rounded-full"
              width={80}
              height={80}
              src={preview || user.imageUrl}
              alt="Profile image"
            />
            <div className="flex flex-col gap-1">
              <h2 className="text-white font-inter font-semibold text-lg">
                Change Profile Picture
              </h2>
              <div className="flex gap-2">
                <div
                  onClick={() => ppRef.current.click()}
                  className="flex hover:scale-105 duration-200 text-white py-3 font-bold bg-richblack-500 px-6 rounded-md  gap-2 items-center"
                >
                  Select
                </div>

                <CTAButton active={true}>
                  <div className="flex gap-2 items-center">
                    Upload <FaCloudUploadAlt />
                  </div>
                </CTAButton>
              </div>
            </div>
          </div>
          <input
            onChange={(e) => {
              if (e.target.files[0]) {
                const reader = new FileReader();

                reader.readAsDataURL(e.target.files[0]);
                reader.onloadend = () => {
                  setPreview(reader.result);
                };
              }
            }}
            ref={ppRef}
            className="hidden"
            type="file"
            name=""
            id=""
          />
        </div>
        <div className="flex flex-col gap-8 bg-richblack-700 mt-4 rounded-lg py-8  justify-between px-16 w-full">
          <div className="text-white font-inter font-semibold">
            Profile Information
          </div>
          <div className="w-full gap-4 flex flex-col ">
            <div className="w-full flex gap-6">
              <div className="w-full">
                <Input
                  label={"First Name"}
                  value={details.firstName || ""}
                  onChange={(e) =>
                    setDetails({ ...details, firstName: e.target.value })
                  }
                />
              </div>
              <div className="w-full">
                <Input
                  label={"Last Name"}
                  value={details.lastName || ""}
                  onChange={(e) =>
                    setDetails({ ...details, lastName: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="w-full flex gap-6">
              <div className="w-full">
                <Input
                  label={"Date of Birth"}
                  type={"Date"}
                  onChange={(e) =>
                    setDetails({ ...details, dateOfBirth: e.target.value })
                  }
                />
              </div>
              <div className="w-full">
                <Input
                  label={"Gender"}
                  value={details.gender || ""}
                  onChange={(e) =>
                    setDetails({ ...details, gender: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="w-full flex gap-6">
              <div className="w-full">
                <Input
                  label={"Contact Number"}
                  value={details.contactNumber || ""}
                  onChange={(e) =>
                    setDetails({ ...details, contactNumber: e.target.value })
                  }
                />
              </div>
              <div className="w-full">
                <Input
                  label={"About"}
                  value={details.about || ""}
                  onChange={(e) =>
                    setDetails({ ...details, about: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end gap-2">
          <div className="flex hover:scale-105 duration-200 text-white py-3 font-bold bg-richblack-500 px-6 rounded-md  gap-2 items-center">
            Cancle
          </div>

          <CTAButton active={true}>
            <div className="flex gap-2 items-center">Save</div>
          </CTAButton>
        </div>

        <div className="flex flex-col gap-8 bg-richblack-700 mt-4 rounded-lg py-8  justify-between px-16 w-full">
          <div className="text-white font-inter font-semibold">Password</div>
          <div className="w-full gap-4 flex flex-col ">
            <div className="w-full flex gap-6">
              <div className="w-full">
                <Input
                  Placeholder={"current password"}
                  label={"Current Password"}
                  value={password.currentPassword || ""}
                  onChange={(e) =>
                    setPassword({
                      ...password,
                      currentPassword: e.target.value,
                    })
                  }
                />
              </div>
              <div className="w-full">
                <Input
                  Placeholder={"new password"}
                  label={"New Password"}
                  value={password.newPassword || ""}
                  onChange={(e) =>
                    setPassword({ ...password, newPassword: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end gap-2">
          <div className="flex hover:scale-105 duration-200 text-white py-3 font-bold bg-richblack-500 px-6 rounded-md  gap-2 items-center">
            Cancle
          </div>

          <CTAButton active={true}>
            <div className="flex gap-2 items-center">Update</div>
          </CTAButton>
        </div>
        <div className="flex  items-start  gap-4 bg-pink-900 mt-4 rounded-lg py-8   justify-start px-16 w-full">
          <VscTrash
            size={80}
            className="text-pink-200 bg-pink-600 p-4 rounded-full "
          />
          <div
            className="flex gap-4 
          flex-col"
          >
            <div className="text-white  font-inter font-semibold">
              Delete Account
            </div>
            <div className=" text-white text-sm font-inter ">
              Would you like to delete account?
              <br />
              This account may contain paid courses.Deleting your account is
              <br />
              permanent and will remove all the contain associated with it.
            </div>
            <div className="text-pink-500 font-inter font-semibold hover:scale-105 duration-500 cursor-pointer">
              want to delete my account
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
