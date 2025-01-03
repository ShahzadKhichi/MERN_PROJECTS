import { School } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { DarkMode } from "@/DarkMode";
import { Separator } from "@radix-ui/react-dropdown-menu";
export const Navbar = () => {
  const user = true;
  return (
    <div className="h-16 dark:bg-[#0A0A0A] bg-white border-b dark:border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10">
      {/* Desktop */}
      <div className="md:flex max-w-7xl mx-auto hidden  justify-between items-center h-full gap-10">
        <div className="flex items-center gap-2">
          <School size={30} />
          <h1 className="hidden md:block font-extrabold text-2xl">
            E-Learning
          </h1>
        </div>
        {/* user icon and dark mode icon */}
        <div className="flex gap-8">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>img</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link to="my-learning">My Learning</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to={"profile"}>Edit Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>Log Out</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Dashboard</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="outline">
                <Link to="login">Login</Link>
              </Button>
              <Button>
                {" "}
                <Link to="login">Sign Up</Link>
              </Button>
            </div>
          )}
          <DarkMode />
        </div>
      </div>
      {/* Mobile Device */}
      <div className="flex md:hidden items-center justify-between h-full">
        <div className="flex items-center gap-2">
          <School size={"30"} />
          <h1 className="  font-extrabold text-2xl">E-Learning</h1>
        </div>
        <MobileNavbar />
      </div>
    </div>
  );
};

const MobileNavbar = () => {
  const role = "instructor";
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          className="rounded-full bg-gray-200 hover:bg-gray-400"
          variant="outline"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className="flex flex-row items-center justify-between mt-2">
          <div className="flex gap-2 ">
            <School />
            <SheetTitle>E-Learning</SheetTitle>
          </div>

          <DarkMode></DarkMode>
        </SheetHeader>
        <Separator />
        <nav className="flex flex-col space-y-4">
          <span>My Learning</span>
          <span>Edit Profile</span>
          <p>Log Out</p>
        </nav>
        {role === "instructor" && (
          <SheetFooter>
            <SheetClose asChild>
              <Button>Dashboard</Button>
            </SheetClose>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};
