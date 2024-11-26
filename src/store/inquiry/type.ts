import type { InquiryListType } from "@/types/inquiry/client";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

const inquiryListTypeAtomState = atom<InquiryListType>({
  key: "inquiry-type",
  default: "새로운 문의",
});

export const useInquiryListTypeStore = () =>
  useRecoilState(inquiryListTypeAtomState);
export const useInquiryListTypeValueStore = () =>
  useRecoilValue(inquiryListTypeAtomState);
export const useSetInquiryListTypeStore = () =>
  useSetRecoilState(inquiryListTypeAtomState);
