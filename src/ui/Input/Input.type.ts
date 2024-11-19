import type { CSSProperties, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: CSSProperties["width"];
  label?: string;
  errorMessage?: string;
  message?: string;
  icon?: ButtonIcon;
  textAlign?: CSSProperties["textAlign"];
  isError?: boolean;
}

export type ButtonIcon = "NONE" | "CALENDAR" | "TIME";
