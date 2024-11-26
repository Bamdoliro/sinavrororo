import { Inquiry, InquiryDetail } from "./client";

export interface GetInquiryListRes {
  dataList: Inquiry[];
}

export interface GetInquiryDetailRes {
  data: InquiryDetail;
}

export interface PostInquiryAnswerReq {
  content: string;
}
