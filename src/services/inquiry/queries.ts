import { KEY } from "@/constants/common/constants";
import { useInquiryListTypeValueStore } from "@/store/inquiry/type";
import { useQuery } from "@tanstack/react-query";
import { getInquiryList } from "./api";

export const useInquiryListQuery = () => {
  const inquiryListType = useInquiryListTypeValueStore();

  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.INQUIRY_LIST, inquiryListType],
    queryFn: () => getInquiryList(inquiryListType),
  });

  return { data: data?.dataList, ...restQuery };
};

