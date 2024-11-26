import { sinabro } from "@/apis/instance/instace";
import { authorization } from "@/apis/token";
import type { InquiryStatus } from "@/types/inquiry/client";

export const patchInquiryStatus = async (id: number, status: InquiryStatus) => {
  if (status === "진행") {
    const { data } = await sinabro.patch(
      `/form/${id}/reject`,
      {},
      authorization()
    );

    return data;
  } else if (status === "완료") {
    const { data } = await sinabro.patch(
      `/form/${id}/approve`,
      {},
      authorization()
    );

    return data;
  }
  const { data } = await sinabro.patch(
    `/form/${id}/receive`,
    {},
    authorization()
  );

  return data;
};
