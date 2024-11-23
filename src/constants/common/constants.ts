export const ROUTES = {
  LOGIN: "/",
  MAIN: "/main",
  INQUIRY: "/inquiry",
  FAQ: "/faq",
  FAQ_POST: "/faq/post",
  ALARM: "/alarm",
  ALARM_POST: "alarm/post",
} as const;

export const TOKEN = {
  ACCESS: "access-token",
  REFRESH: "refresh-token",
} as const;

export const KEY = {
  LOGIN: "useLoginKey",
};
