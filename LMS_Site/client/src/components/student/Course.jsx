import React from "react";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Badge } from "../ui/badge";

const Course = () => {
  return (
    <Card className="overflow-hidden rounded-lg dark:bg-gray-800 bg-white hover:shadow-2xl   hover:scale-105 transition-all duration-200">
      <div className="relative">
        <img
          src="https://i.ytimg.com/vi/wm5gMKuwSYk/maxresdefault.jpg"
          alt=""
          className="w-full h-36 object-cover rounded-t-lg "
        />
      </div>
      <CardContent className="px-5 py-4 space-y-3 flex-col ">
        <h1 className="hvoer:underline font-bold text-lg truncate">
          Next Js Full Course 2024
        </h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 ">
            <Avatar>
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
                className="h-12 w-12 rounded-full"
              />

              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className="font-medium text-sm">Khichi MERN Stack</h1>
          </div>
          <Badge className="bg-blue-600 text-white px-2 py-1 text-xs rounded-full ">
            Advance
          </Badge>
        </div>
        <div className="text-lg font-bold ">
          <span>Rs 499</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default Course;
