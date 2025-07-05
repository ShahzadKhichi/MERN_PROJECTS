import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import React from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

import { Loader2 } from "lucide-react";
import Course from "./Course";
import { useLoadUserQuery } from "@/services/api/authApi";
import { useState, useEffect } from "react";

export const Profile = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const { data, isLoading } = useLoadUserQuery();

  useEffect(() => {
    setEnrolledCourses([1, 2]);
  }, [data]);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 my-24">
      <h1 className="font-bold text-2xl text-center md:text-left">Profile</h1>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 m-y-5">
        <div className="flex flex-col items-center">
          <Avatar>
            <AvatarImage
              className="h-24 w-24 md:h-32 md:w-32 mb-4 rounded-full"
              src={data?.user?.photoUrl || "https://github.com/shadcn.png"}
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <div>
            <h1 className="font-semibold text-gray-900 dark:text-gray-100 ">
              Name:
              <span className="font-normal text-gray-700  dark:text-gray-300 ml-2">
                {data?.user?.name || NaN}
              </span>
            </h1>
          </div>
          <div>
            <h1 className="font-semibold text-gray-900 dark:text-gray-100 ">
              Email:
              <span className="font-normal text-gray-700  dark:text-gray-300 ml-2">
                {data?.user?.email || NaN}
              </span>
            </h1>
          </div>
          <div>
            <h1 className="font-semibold text-gray-900 dark:text-gray-100 ">
              Role:
              <span className="font-normal text-gray-700  dark:text-gray-300 ml-2">
                {data?.user?.role.toUpperCase() || NaN}
              </span>
            </h1>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" className="mt-2">
                Edit Profile
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogDescription>
                  Make changes to your Profile here and click save when you are
                  done
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label>Name</Label>
                  <Input
                    type="text"
                    placeholder="Name"
                    name="Name"
                    className="col-span-3"
                  ></Input>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label>Profile Photo</Label>
                  <Input
                    type="file"
                    accept="image/*"
                    className="col-span-3"
                  ></Input>
                </div>
              </div>
              <DialogFooter>
                <Button disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 />
                      Please wait
                    </>
                  ) : (
                    "Save Changes"
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div>
        <h1 className="font-medium text-lg">Courses You're enrolled in</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5">
          {enrolledCourses.length == 0 ? (
            <h1>You haven't enrolled yet</h1>
          ) : (
            enrolledCourses.map((course) => (
              <Course course={course} index={course?._id} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
