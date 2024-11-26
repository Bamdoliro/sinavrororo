import { ROUTES } from "@/constants/common/constants";
import { useChangeInquiryStatusMutation } from "@/services/inquiry/mutations";
import type { InquiryStatus } from "@/types/inquiry/client";

export const useChangeInquiryStatusAction = (
  id: number,
  status: InquiryStatus,
  closeModal: () => void
) => {
  const { changeInquiryStatus } = useChangeInquiryStatusMutation(
    id,
    status,
    closeModal
  );

  const handleChangeInquiryStatusButtonClick = () => {
    changeInquiryStatus();
    window.location.href = ROUTES.INQUIRY;
  };

  return { handleChangeInquiryStatusButtonClick };
};
