import { postApiAuth } from "./utility/postApi";

export const createBlog = async (data = null) => {
  const response = await postApiAuth(`blog/create`, data);
  return response;
};
