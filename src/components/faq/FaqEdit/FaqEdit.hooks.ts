import {
  useFaqEditMutation,
  useDeleteFaqMutation,
} from "@/services/faq/mutations";
import type { PutFaqReq } from "@/types/faq/remote";

export const useFaqEditAction = (id: number, faqData: PutFaqReq) => {
  const { editFaqMutate } = useFaqEditMutation(id, faqData);

  const handleFaqEditButtonClick = () => {
    editFaqMutate();
  };

  return {
    handleFaqEditButtonClick,
  };
};

export const useFaqDeleteAction = (id: number) => {
  const { deleteFaqMutate } = useDeleteFaqMutation(id);

  const handleDeleteFaqButtonClick = () => {
    deleteFaqMutate();
  };

  return { handleDeleteFaqButtonClick };
};
