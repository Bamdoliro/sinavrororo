import { ROUTES } from "@/constants/common/constants";
import { useApiError } from "@/hooks";
import { useMutation } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { deleteLogoutAdmin, getLoginUri, postLoginAdmin } from "./api";
import { Cookie } from "@/apis/cookie/cookie";
import { useEffect } from "react";

export const useLoginUriMutation = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { handleError } = useApiError();

  useEffect(() => {
    const code = searchParams.get("code");
    if (code) {
      postLoginAdmin(code)
        .then((res) => {
          Cookie.setItem("refresh-token", res.data.refreshToken);
          localStorage.setItem("access-token", res.data.accessToken);
          router.replace(ROUTES.MAIN);
        })
        .catch(handleError);
    }
  }, [searchParams, handleError, router]);

  const { mutate: loginAdminMutate, ...restMutation } = useMutation({
    mutationFn: () => getLoginUri(),
    onSuccess: (res) => {
      window.location.href = res.data;
    },
    onError: handleError,
  });

  return { loginAdminMutate, ...restMutation };
};

export const useLoginAdminMutation = () => {
  const { handleError } = useApiError();
  const router = useRouter();
  const searchParams = useSearchParams();

  const { mutate: loginAdminMutate, ...restMutation } = useMutation({
    mutationFn: async () => {
      const code = searchParams.get("code");
      if (code) {
        return postLoginAdmin(code);
      }
    },
    onSuccess: (res) => {
      Cookie.setItem("refresh-token", res.refreshToken);
      localStorage.setItem("access-token", res.accessToken);
      router.replace(ROUTES.MAIN);
    },
    onError: handleError,
  });

  return { loginAdminMutate, ...restMutation };
};

export const useLogoutAdminMutation = () => {
  const router = useRouter();

  const { mutate: logoutAdminMutate, ...restMutation } = useMutation({
    mutationFn: deleteLogoutAdmin,
    onSuccess: () => {
      localStorage.clear();
      Cookie.removeItem("refresh-token");
      router.replace(ROUTES.MAIN);
    },
    onError: () => {
      localStorage.clear();
      Cookie.removeItem("refresh-token");
      router.replace(ROUTES.MAIN);
    },
  });
  return { logoutAdminMutate, ...restMutation };
};
