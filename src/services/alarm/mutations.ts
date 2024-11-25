import { ROUTES } from "@/constants/common/constants";
import { useApiError } from "@/hooks";
import type { PostAlarmReq } from "@/types/alarm/remote";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { postAlarm } from "./api";

export const usePostAlarmMutation = (alarmData: PostAlarmReq) => {
  const { handleError } = useApiError();
  const router = useRouter();

  const { mutate: postAlarmMutate, ...restMutation } = useMutation({
    mutationFn: () => postAlarm(alarmData),
    onSuccess: () => {
      toast("게시물이 게시되었습니다.", {
        type: "success",
      });
      router.push(ROUTES.ALARM);
    },
    onError: handleError,
  });

  return { postAlarmMutate, ...restMutation };
};
