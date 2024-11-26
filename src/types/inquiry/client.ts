export type InquiryStatus = "대기" | "진행" | "완료" | "";

export interface Inquiry {
  id: number;
  title: string;
  status: string;
  user: User[];
  updatedAt: string;
}

export interface User {
  email: string;
  name: string;
  authority: string;
}

export type InquiryListType = "새로운 문의" | "완료된 문의";
