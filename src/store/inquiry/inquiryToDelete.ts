import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

const inquiryToDeleteAtomState = atom<Record<number, boolean>>({
  key: "inquiry-to-delete",
  default: {},
});

export const useInquiryToDeleteStore = () => useRecoilState(inquiryToDeleteAtomState);
export const useInquiryToDeleteValueStore = () => useRecoilValue(inquiryToDeleteAtomState);
export const useSetInquiryToDeleteStore = () =>
  useSetRecoilState(inquiryToDeleteAtomState);
