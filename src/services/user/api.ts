import { sinabro } from "@/apis/instance/instace";
import { authorization } from "@/apis/token";
import type { GetUserRes } from "@/types/user/remote";

export const getUser = async () => {
  const { data } = await sinabro.get<GetUserRes>("/users", authorization());
  return data;
};
