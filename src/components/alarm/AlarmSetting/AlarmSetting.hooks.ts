import { usePostAlarmMutation } from "@/services/alarm/mutations";
import type { PostAlarmReq } from "@/types/alarm/remote";

export const useAlarmPostAction = (alarmData: PostAlarmReq) => {
  const { postAlarmMutate } = usePostAlarmMutation(alarmData);

  const handleAlarmPostButtonClick = () => {
    postAlarmMutate();
  };

  return { handleAlarmPostButtonClick };
};
