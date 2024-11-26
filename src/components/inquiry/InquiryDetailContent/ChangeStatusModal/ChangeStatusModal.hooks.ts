import { ROUTES } from "@/constants/common/constants";
import { useChangeInquiryStatusMutation } from "@/services/inquiry/mutations";
import type { InquiryStatusType } from "@/types/inquiry/client";
import { PostInquiryStatusReq } from "@/types/inquiry/remote";

export const useChangeInquiryStatusAction = (
  id: number,
  status: PostInquiryStatusReq,
  closeModal: () => void
) => {
  const { changeInquiryStatus } = useChangeInquiryStatusMutation(
    id,
    status,
    closeModal
  );

  const handleChangeInquiryStatusButtonClick = () => {
    changeInquiryStatus();
  };

  return { handleChangeInquiryStatusButtonClick };
};
