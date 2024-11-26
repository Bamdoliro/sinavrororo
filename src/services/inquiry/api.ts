import { sinabro } from "@/apis/instance/instace";
import { authorization } from "@/apis/token";
import type { InquiryStatusType } from "@/types/inquiry/client";
import {
  GetInquiryDetailRes,
  GetInquiryListRes,
  PostInquiryStatusReq,
} from "@/types/inquiry/remote";

export const patchInquiryStatus = async (id: number, status: PostInquiryStatusReq) => {
  console.log(id, status);
  const { data } = await sinabro.patch(
    `/admin/inquiries/${id}`,
    status,
    authorization()
  );

  return data;
};

export const getInquiryList = async (inquiryListType: InquiryStatusType) => {
  const { data } = await sinabro.get<GetInquiryListRes>(
    `/admin/inquiries?status=${inquiryListType}`,
    authorization()
  );

  return data;
};

export const getInquiryDetail = async (id: number) => {
  const { data } = await sinabro.get<GetInquiryDetailRes>(
    `/admin/inquiries/${id}`,
    authorization()
  );
  return data;
};

export const postInquiryAnswer = async (
  id: number,
  inquiryAnswerData: string
) => {
  const { data } = await sinabro.post(
    `/answers/${id}`,
    inquiryAnswerData,
    authorization()
  );
  return data;
};
