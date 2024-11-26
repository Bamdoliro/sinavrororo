import { sinabro } from "@/apis/instance/instace";
import { authorization } from "@/apis/token";
import type { InquiryStatusType, InquiryStatus } from "@/types/inquiry/client";
import { GetInquiryListRes } from "@/types/inquiry/remote";

export const patchInquiryStatus = async (id: number, status: InquiryStatus) => {
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
