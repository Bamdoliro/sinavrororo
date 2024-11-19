import { color, font } from "@/styles";
import { css } from "styled-components";

export const getButtonStyle = {
  PRIMARY: css`
    background-color: ${color.primary};
    color: ${color.white100};
    &:hover {
      background-color: #f1783f;
    }
  `,
  SECONDARY: css`
    background-color: ${color.white100};
    color: ${color.gray900};
    &:hover {
      background-color: #f1783f;
    }
  `,
  TERTIARY: css`
    background-color: ${color.gray100};
    color: ${color.gray600};
    &:hover {
      background-color: ${color.gray200};
    }
  `,
  DISABLED: css`
    background-color: ${color.gray500};
    color: ${color.gray300};
    cursor: auto;
  `,
};

export const getButtonPadding = {
  LARGE: css`
    padding: 16px 156px;
  `,
  MEDIUM: css`
    padding: 10px 16px 10px 10px;
  `,
  SMALL: css`
    padding: 22px 40px;
  `,
  ICON: css`
    padding: 8px 14px;
  `,
};

export const getButtonSize = {
  LARGE: css`
    ${font.Heading4}
    height: 54px;
  `,
  MEDIUM: css`
    ${font.Heading5}
    height: 48px;
  `,
  SMALL: css`
    ${font.Heading4}
    height: 40px;
  `,
  ICON: css`
    ${font.Heading5}
    height: 36px;
  `,
};
