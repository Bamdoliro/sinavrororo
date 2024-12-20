import { ROUTES } from "@/constants/common/constants";
import { useApiError } from "@/hooks";
import type { PostFaqReq, PutFaqReq } from "@/types/faq/remote";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { postFaq, putEditFaq, deleteFaq } from "./api";

export const usePostFaqMutation = (faqData: PostFaqReq) => {
  const { handleError } = useApiError();
  const router = useRouter();

  const { mutate: postFaqMutate, ...restMutation } = useMutation({
    mutationFn: () => postFaq(faqData),
    onSuccess: () => {
      toast("게시물이 게시되었습니다.", {
        type: "success",
      });
      router.push(ROUTES.FAQ);
    },
    onError: handleError,
  });

  return { postFaqMutate, ...restMutation };
};

export const useFaqEditMutation = (id: number, faqData: PutFaqReq) => {
  const { handleError } = useApiError();
  const router = useRouter();

  const { mutate: editFaqMutate, ...restMutation } = useMutation({
    mutationFn: () => putEditFaq(id, faqData),
    onSuccess: () => {
      toast("게시물이 수정되었습니다.", {
        type: "success",
      });
      router.push(`${ROUTES.FAQ}/${id}`);
    },
    onError: handleError,
  });

  return { editFaqMutate, ...restMutation };
};

export const useDeleteFaqMutation = (id: number) => {
  const router = useRouter();

  const { mutate: deleteFaqMutate, ...restMutation } = useMutation({
    mutationFn: () => deleteFaq(id),
    onSuccess: () => {
      toast("게시물이 삭제되었습니다.", {
        type: "success",
      });
      router.push(ROUTES.FAQ);
    },
  });

  return { deleteFaqMutate, ...restMutation };
};
