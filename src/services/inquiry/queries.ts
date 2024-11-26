import { KEY } from "@/constants/common/constants";
import { useInquiryListStatusTypeValueStore } from "@/store/inquiry/inquiry";
import { useQuery } from "@tanstack/react-query";
import { getInquiryDetail, getInquiryList } from "./api";

export const useInquiryListQuery = () => {
  const inquiryListType = useInquiryListStatusTypeValueStore();

  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.INQUIRY_LIST, inquiryListType],
    queryFn: () => getInquiryList(inquiryListType),
  });

  return { data: data?.dataList, ...restQuery };
};

export const useInquiryDetailQuery = (id: number) => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.INQUIRY_DETAIL, id] as const,
    queryFn: () => getInquiryDetail(id),
  });

  return { data: data?.data, ...restQuery };
};
