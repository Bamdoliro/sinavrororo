import { KEY } from "@/constants/common/constants";
import { useInquiryListStatusTypeValueStore } from "@/store/inquiry/inquiry";
import { useQuery } from "@tanstack/react-query";
import { getInquiryList } from "./api";

export const useInquiryListQuery = () => {
  const inquiryListType = useInquiryListStatusTypeValueStore();

  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.INQUIRY_LIST, inquiryListType],
    queryFn: () => getInquiryList(inquiryListType),
  });

  return { data: data?.dataList, ...restQuery };
};
