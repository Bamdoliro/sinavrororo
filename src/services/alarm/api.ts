import { sinabro } from "@/apis/instance/instace";
import { authorization } from "@/apis/token";
import type { PostAlarmReq } from "@/types/alarm/remote";

export const postAlarm = async (faqData: PostAlarmReq) => {
  const { data } = await sinabro.post(
    `/notifications/all`,
    faqData,
    authorization()
  );
  return data;
};
