import { KEY } from "@/constants/common/constants";
import { useQuery } from "@tanstack/react-query";
import { getFaqList, getFaqDetail } from "./api";

export const useFaqListQuery = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.FAQ_LIST],
    queryFn: getFaqList,
  });

  return { data: data?.dataList, ...restQuery };
};

export const useFaqDetailQuery = (id: number) => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.FAQ_DETAIL, id] as const,
    queryFn: () => getFaqDetail(id),
  });

  return { data: data?.data, ...restQuery };
};
