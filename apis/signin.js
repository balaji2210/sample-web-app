import { postApi } from "./utility/postApi";

export const signIn = async (data) => {
  const result = await postApi(`login`, data);
  return result;
};
