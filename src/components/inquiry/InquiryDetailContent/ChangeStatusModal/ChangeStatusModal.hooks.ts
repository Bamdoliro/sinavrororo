import { ROUTES } from "@/constants/common/constants";
import { useChangeInquiryStatusMutation } from "@/services/inquiry/mutations";
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
    window.location.href = ROUTES.INQUIRY;
  };

  return { handleChangeInquiryStatusButtonClick };
};
