import { Inquiry, InquiryDetail, InquiryStatusType } from "./client";

export interface GetInquiryListRes {
  dataList: Inquiry[];
}

export interface GetInquiryDetailRes {
  data: InquiryDetail;
}

export interface PostInquiryAnswerReq {
  content: string;
}

export interface PostInquiryStatusReq {
  status: InquiryStatusType;
}
