import { ROUTES } from "@/constants/common/constants";
import { useLogoutAdminMutation } from "@/services/auth/mutations";
import { useRouter } from "next/navigation";

export const useCTAButton = () => {
  const router = useRouter();

  const handleMoveFormPage = () => {
    router.push(ROUTES.MAIN);
  };

  const handleChangePassword = () => {
    router.push(ROUTES.MAIN);
  };

  return { handleMoveFormPage, handleChangePassword };
};

export const useLogoutAction = () => {
  const { logoutAdminMutate } = useLogoutAdminMutation();

  const handleLogout = () => {
    logoutAdminMutate();
  };

  return { handleLogout };
};
