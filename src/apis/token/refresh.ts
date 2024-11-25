import { ROUTES, TOKEN } from "@/constants/common/constants";
import { sinabro } from "../instance/instace";
import { Cookie } from "../cookie/cookie";
import { Storage } from "../storage/storage";

const refreshToken = async () => {
  try {
    const { data } = await sinabro.patch("/auth", null, {
      headers: {
        "Refresh-Token": `${Cookie.getItem(TOKEN.REFRESH)}`,
      },
    });
    Storage.setItem(TOKEN.ACCESS, data.data.accessToken);
  } catch {
    window.location.href = ROUTES.LOGIN;
    alert("다시 로그인 해주세요");
    localStorage.clear();
  }
};

export default refreshToken;
