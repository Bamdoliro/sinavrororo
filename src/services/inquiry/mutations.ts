import { useApiError } from "@/hooks";
import { InquiryStatus } from "@/types/inquiry/client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { patchInquiryStatus } from "./api";

export const useChangeInquiryStatusMutation = (
  id: number,
  status: InquiryStatus,
  closeModal: () => void
) => {
  const { handleError } = useApiError();
  const { mutate: changeInquiryStatus, ...restMutation } = useMutation({
    mutationFn: () => patchInquiryStatus(id, status),
    onSuccess: () => {
      toast("문의 상태가 변경되었습니다.", { type: "success" });
      closeModal();
    },
    onError: handleError,
  });
  return { changeInquiryStatus, ...restMutation };
};
