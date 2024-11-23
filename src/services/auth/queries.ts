import { getCheckLogin } from "./api";
import { KEY } from "@/constants/common/constants";
import { useQuery } from "@tanstack/react-query";

export const useLoginCheckQuery = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.LOGIN],
    queryFn: getCheckLogin,
  });

  return { data, ...restQuery };
};
