import { ROUTES } from "@/constants/common/constants";
import { useRouter } from "next/navigation";

const useCTAButton = () => {
  const router = useRouter();
  const handleGoAlarmSettingPageButtonClick = () => {
    router.push(ROUTES.ALARM_POST);
  };
  return { handleGoAlarmSettingPageButtonClick };
};

export default useCTAButton;
