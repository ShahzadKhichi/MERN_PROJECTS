import React, { useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import {
  useSignupUserMutation,
  useLoginUserMutation,
} from "@/services/api/authApi";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";

export function LoginAndSignUp() {
  const [signupinputs, setsignupinputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginInputs, setloginInputs] = useState({
    email: "",
    password: "",
  });

  const [
    signupUser,
    {
      data: singupData,
      error: signupError,
      isLoading: signIsLoading,
      isSuccess: signupIsSuccess,
      isError: signupIsError,
    },
  ] = useSignupUserMutation();
  const [
    loginUser,
    {
      data: loginData,
      isLoading: loginIsLoading,
      isError: loginIsError,
      isSuccess: loginIsSuccess,
      error: loginError,
    },
  ] = useLoginUserMutation();

  function inputHandler(e, type) {
    const { name, value } = e.target;
    if (type === "SignUp") {
      setsignupinputs({
        ...signupinputs,
        [name]: value,
      });
    } else {
      setloginInputs({
        ...loginInputs,
        [name]: value,
      });
    }
  }

  async function registerationHandler(type) {
    const inputData = type === "SignUp" ? signupinputs : loginInputs;
    const action = type === "SignUp" ? signupUser : loginUser;
    await action(inputData);
  }

  useEffect(() => {
    if (signupIsSuccess && singupData) {
      setsignupinputs({
        name: "",
        email: "",
        password: "",
      });
      toast.success("SignUp Successfull");
    } else if (signupIsError) {
      toast.error(signupError.data.message);
    } else if (loginIsSuccess && loginData) {
      setloginInputs({
        email: "",
        password: "",
      });
      toast.success(loginData.message);
    } else if (loginIsError) {
      toast.error(loginError.message);
    }
  }, [
    signupError,
    signupIsSuccess,
    signupIsError,
    loginIsError,
    loginIsSuccess,
    loginError,
  ]);

  return (
    <div className="flex items-center justify-center h-screen">
      <Tabs defaultValue="SignUp" className="w-[400px] ">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="SignUp">SignUp</TabsTrigger>
          <TabsTrigger value="Login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="SignUp">
          <Card>
            <CardHeader>
              <CardTitle>SignUp</CardTitle>
              <CardDescription>
                Enter your name ,email and password here. After clicking on
                SignUp, you'll be Signed Up.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  onChange={(e) => inputHandler(e, "SignUp")}
                  id="name"
                  name="name"
                  value={signupinputs.name}
                  placeholder="Eg. Pedro Duarte"
                  required={true}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="Email">Email</Label>
                <Input
                  id="Email"
                  name="email"
                  type="email"
                  value={signupinputs.email}
                  onChange={(e) => inputHandler(e, "SignUp")}
                  placeholder="Eg. Pedro@gmail.com"
                  required={true}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="Password">Password</Label>
                <Input
                  onChange={(e) => inputHandler(e, "SignUp")}
                  id="Password"
                  name="password"
                  type="password"
                  signupinputs={signupinputs.password}
                  placeholder="Password"
                  required={true}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button
                disable={signIsLoading}
                type="submit"
                onClick={() => registerationHandler("SignUp")}
              >
                {signIsLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please Wait
                  </>
                ) : (
                  "SignUp"
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="Login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Enter your credientials to Login to E-Learning
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="Email">Email </Label>
                <Input
                  onChange={(e) => inputHandler(e, "Login")}
                  id="Email"
                  type="email"
                  name="email"
                  value={loginInputs.email}
                  placeholder="Eg. Pedro@gmail.com"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="Password">Password</Label>
                <Input
                  onChange={(e) => inputHandler(e, "Login")}
                  id="Password"
                  type="password"
                  name="password"
                  value={loginInputs.password}
                  placeholder="password"
                  required={true}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button
                disable={loginIsLoading}
                type="submit"
                onClick={() => registerationHandler("Login")}
              >
                {loginIsLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please Wait
                  </>
                ) : (
                  "Login"
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
