import { useApiError } from "@/hooks";
import { InquiryStatus } from "@/types/inquiry/client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { patchInquiryStatus, postInquiryAnswer } from "./api";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/common/constants";

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

export const usePostInquiryAnswerMutation = (
  id: number,
  inquiryAnswerData: string
) => {
  const { handleError } = useApiError();
  const router = useRouter();

  const { mutate: postInquiryAnswerMutate, ...restMutation } = useMutation({
    mutationFn: () => postInquiryAnswer(id, inquiryAnswerData),
    onSuccess: ({ data }) => {
      toast("문의 답변이 게시되었습니다.", {
        type: "success",
      });
      router.push(`${ROUTES.INQUIRY}/${data.id}`);
      window.location.reload();
    },
    onError: handleError,
  });

  return { postInquiryAnswerMutate, ...restMutation };
};
