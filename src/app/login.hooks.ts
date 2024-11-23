import { useLoginUriMutation } from "@/services/auth/mutations";

export const useLoginAction = () => {
  const { loginAdminMutate: loginAdminMutate } = useLoginUriMutation();

  const handleLogin = () => {
    loginAdminMutate();
  };

  return { handleLogin };
};
