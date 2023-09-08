const { getApi } = require("./utility/getApi");

export const logout = async () => {
  const response = await getApi(`logout`);
  return response;
};
