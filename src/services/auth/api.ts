import { sinabro } from "@/apis/instance/instace";
import { authorization } from "@/apis/token";
import type { GetCheckLoginRes } from "@/types/auth/remote";

export const getLoginUri = async () => {
  const { data } = await sinabro.get("/auth/google/web/link");
  return data;
};

export const postLoginAdmin = async (code: string) => {
  const { data } = await sinabro.post(
    `/auth/google/web?code=${encodeURIComponent(code)}`
  );
  return data;
};

export const deleteLogoutAdmin = async () => {
  await sinabro.delete("/auth", authorization());
};

export const getCheckLogin = async () => {
  const { data } = await sinabro.get<GetCheckLoginRes>(
    "/users",
    authorization()
  );
  return data;
};

export const getRefreshToken = async () => {
  const { data } = await sinabro.get<GetCheckLoginRes>(
    "/auth/refresh",
    authorization.Refresh()
  );
  return data;
};
