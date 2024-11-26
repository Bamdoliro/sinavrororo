import { usePostInquiryAnswerMutation } from "@/services/inquiry/mutations";

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
