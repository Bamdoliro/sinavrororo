import { ROUTES } from "@/constants/common/constants";
import { useLogoutAdminMutation } from "@/services/auth/mutations";
import { useRouter } from "next/navigation";

export const useCTAButton = () => {
  const router = useRouter();

  const handleMoveMainPage = () => {
    router.push(ROUTES.MAIN);
  };

  const handleChangePassword = () => {
    router.push(ROUTES.MAIN);
  };

  return { handleMoveMainPage, handleChangePassword };
};

export const useLogoutAction = () => {
  const { logoutAdminMutate } = useLogoutAdminMutation();

  const handleLogout = () => {
    logoutAdminMutate();
  };

  return { handleLogout };
};
