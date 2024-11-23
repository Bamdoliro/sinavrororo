import { TOKEN } from "@/constants/common/constants";
import { Storage } from "../storage/storage";
import { Cookie } from "../cookie/cookie";

const authorization = () => {
  return {
    headers: {
      Authorization: `Bearer ${Storage.getItem(TOKEN.ACCESS)}`,
    },
  };
};

authorization.Refresh = () => {
  return {
    headers: {
      Authorization: `Bearer ${Cookie.getItem(TOKEN.REFRESH)}`,
    },
  };
};

authorization.FormData = () => {
  return {
    headers: {
      Authorization: `Bearer ${Storage.getItem(TOKEN.ACCESS)}`,
      "Content-Type": "multipart/form-data",
    },
  };
};

export default authorization;
