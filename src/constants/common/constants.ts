export const ROUTES = {
  LOGIN: "/",
  MAIN: "/main",
  INQUIRY: "/inquiry",
  FAQ: "/faq",
  FAQ_POST: "/faq/post",
  ALARM: "/alarm",
} as const;

export const TOKEN = {
  ACCESS: "access-token",
  REFRESH: "refresh-token",
} as const;

export const KEY = {
  LOGIN: "useLoginKey",
  ADMIN: "useAdminKey",
  LOGIN_CHECK: "useLoginCheck",
  TOKEN: "useRefreshToken",
  FAQ_LIST: "useFaqList",
  FAQ_DETAIL: "useFaqDetail",
  INQUIRY_LIST: "useInquiryList",
};
