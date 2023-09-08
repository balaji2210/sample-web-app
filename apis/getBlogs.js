import { getApi } from "./utility/getApi";

export const getBlogs = async () => {
  const result = await getApi(`blog`);
  return result;
};
