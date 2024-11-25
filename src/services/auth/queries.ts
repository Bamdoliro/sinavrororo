import { getCheckLogin, getRefreshToken } from "./api";
import { KEY } from "@/constants/common/constants";
import { useQuery } from "@tanstack/react-query";

export const useRefreshToken = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.TOKEN],
    queryFn: getRefreshToken,
  });

  return { data, ...restQuery };
};

export const useLoginCheckQuery = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.LOGIN_CHECK],
    queryFn: getCheckLogin,
  });

  return { data, ...restQuery };
};
