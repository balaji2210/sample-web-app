import { postApi } from "./utility/postApi";

export const signUp = async (data) => {
  const result = await postApi(`signup`, data);
  return result;
};
