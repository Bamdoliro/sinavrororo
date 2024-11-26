import { sinabro } from "@/apis/instance/instace";
import { authorization } from "@/apis/token";
import type { InquiryListType, InquiryStatus } from "@/types/inquiry/client";
import { GetInquiryListRes } from "@/types/inquiry/remote";

export const patchInquiryStatus = async (id: number, status: InquiryStatus) => {
  const { data } = await sinabro.patch(
    `/admin/inquiries/${id}`,
    status,
    authorization()
  );
  return data;
};

export const getInquiryList = async (inquiryListType: InquiryListType) => {
  if (inquiryListType === "새로운 문의") {
    const { data } = await sinabro.get<GetInquiryListRes>(
      "/admin/inquiries?status=WAITING",
      authorization()
    );
    return data;
  }
  if (inquiryListType === "완료된 문의") {
    const { data } = await sinabro.get<GetInquiryListRes>(
      "/admin/inquiries?status=COMPLETED",
      authorization()
    );
    return data;
  }

  const { data } = await sinabro.get<GetInquiryListRes>(
    "//admin/inquiries",
    authorization()
  );
  return data;
};
