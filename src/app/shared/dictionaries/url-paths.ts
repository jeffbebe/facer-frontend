import { urlConcat } from "../utils/url-concat.util";

export const Paths = {
  auth: {
    login: "login",
    register: "register",
  },
};

export const AbsolutePaths = {
  auth: urlConcat("auth", Paths.auth),
};
