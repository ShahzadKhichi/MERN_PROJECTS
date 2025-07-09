import { isValidUsername } from "6pp";
export const usernameValidator = (username) => {
  return {
    isValid: isValidUsername(username),
    errorMessage: "username is invalid",
  };
};
