import axios from "axios";

export const postApi = async (url, data = null) => {
  try {
    const response = await axios.post(
      `https://azure-jackrabbit-cape.cyclic.cloud/${url}`,
      data
    );
    return {
      success: response?.status === 200,
      data: response?.data,
      message: response?.data?.message,
    };
  } catch (error) {
    return error;
  }
};

export const postApiAuth = async (url, data = null) => {
  try {
    const token =
      typeof window !== "undefined" ? localStorage?.getItem("token") : null;
    const response = await axios.post(
      `https://azure-jackrabbit-cape.cyclic.cloud/${url}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return {
      success: response?.status === 200,
      data: response?.data,
      message: response?.data?.message,
    };
  } catch (error) {
    return error;
  }
};
