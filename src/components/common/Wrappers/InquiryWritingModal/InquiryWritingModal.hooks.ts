import { usePostInquiryAnswerMutation } from "@/services/inquiry/mutations";
import type { PostInquiryAnswerReq } from "@/types/inquiry/remote";

export const useInquiryAnswerPostAction = (
  id: number,
  InquiryAnswerData: string
) => {
  const { postInquiryAnswerMutate } = usePostInquiryAnswerMutation(
    id,
    InquiryAnswerData
  );

  const handleInquiryAnswerPost = () => {
    postInquiryAnswerMutate();
  };

  return { handleInquiryAnswerPost };
};
