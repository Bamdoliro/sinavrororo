import { ROUTES } from "@/constants/common/constants";
import { useRouter } from "next/navigation";
import { usePostFaqMutation } from "@/services/faq/mutations";
import type { PostFaqReq } from "@/types/faq/remote";

export const useCTAButton = () => {
  const router = useRouter();
  const handleGoFaqPostPageButtonClick = () => {
    router.push(ROUTES.FAQ_POST);
  };
  return { handleGoFaqPostPageButtonClick };
};

export const useFaqPostAction = (faqData: PostFaqReq) => {
  const { postFaqMutate } = usePostFaqMutation(faqData);

  const handleFaqPostButtonClick = () => {
    postFaqMutate();
  };

  return { handleFaqPostButtonClick };
};
