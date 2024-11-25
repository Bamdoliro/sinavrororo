import { Storage } from "@/apis/storage/storage";
import { KEY, TOKEN } from "@/constants/common/constants";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "./api";

export const useUserQuery = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.ADMIN] as const,
    queryFn: getUser,
    enabled: !!Storage.getItem(TOKEN.ACCESS),
  });

  return { data: data?.data, ...restQuery };
};
