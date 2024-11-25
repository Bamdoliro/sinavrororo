import type { Faq, FaqDetail } from "./client";

export interface PostFaqReq {
  title: string;
  content: string;
}

export interface GetFaqListRes {
  dataList: Faq[];
}

export interface GetFaqDetailRes {
  data: FaqDetail;
}

export interface PutFaqReq {
  title: string;
  content: string;
}
