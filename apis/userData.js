import { getApi } from "./utility/getApi";

export const getUserData = async () => {
  const response = await getApi(`user`);
  if (response?.success && typeof window !== "undefined") {
    localStorage?.setItem("email", response?.data?.data?.email);
    localStorage?.setItem("name", response?.data?.data?.name);
    localStorage?.setItem("userType", response?.data?.data?.userType);
    localStorage?.setItem("user_id", response?.data?.data?._id);
  }
  return response;
};
