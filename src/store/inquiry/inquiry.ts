import type { InquiryStatusType } from "@/types/inquiry/client";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

const inquiryListStatusTypeAtomState = atom<InquiryStatusType>({
  key: "inquiry-status-type",
  default: "WAITING",
});

export const useInquiryListStatusTypeStore = () =>
  useRecoilState(inquiryListStatusTypeAtomState);
export const useInquiryListStatusTypeValueStore = () =>
  useRecoilValue(inquiryListStatusTypeAtomState);
export const useSetInquiryListStatusTypeStore = () =>
  useSetRecoilState(inquiryListStatusTypeAtomState);
