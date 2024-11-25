import type { CheckLoginType } from "./client";

export interface PostLoginAuthReq {
  email: string;
  name: string;
}

export interface GetCheckLoginRes {
  data: CheckLoginType;
}
