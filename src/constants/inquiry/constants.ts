import { InquiryStatusType } from "@/types/inquiry/client";

export const INQUIRY_STATUS_CATEGORY: Record<InquiryStatusType, string> = {
  WAITING: "진행 중",
  IN_PROGRESS: "대기 중",
  COMPLETED: "완료",
  "": "",
};
