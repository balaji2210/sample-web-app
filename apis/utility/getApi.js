import axios from "axios";

export const getApi = async (url) => {
  try {
    const token =
      typeof window !== "undefined" ? localStorage?.getItem("token") : null;
    const response = await axios.get(
      `https://azure-jackrabbit-cape.cyclic.cloud/${url}`,
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
