import { IconAddWhite } from "@public/svgs/index";
import color from "@/styles/color";
import flex from "@/styles/flex";
import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import React from "react";
import styled from "styled-components";
import {
  getButtonPadding,
  getButtonSize,
  getButtonStyle,
} from "./Button.style";
import type { ButtonIcon, ButtonSize, ButtonStyleType } from "./Button.type";

type Props = {
  children: ReactNode;
  styleType?: ButtonStyleType;
  icon?: ButtonIcon;
  size?: ButtonSize;
  width?: CSSProperties["width"];
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  onClick,
  children,
  styleType = "PRIMARY",
  icon = "NONE",
  size = "MEDIUM",
  width,
  style,
  disabled,
}: Props) => {
  return (
    <StyledButton
      style={{ width, ...style }}
      onClick={onClick}
      styleType={styleType}
      icon={icon}
      size={size}
      disabled={disabled || styleType === "DISABLED"}
    >
      {icon === "ADD_ICON" && (
        <IconAddWhite color={color.gray100} width={24} height={24} />
      )}
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<{
  styleType: ButtonStyleType;
  icon: ButtonIcon;
  size: ButtonSize;
}>`
  ${flex({ alignItems: "center", justifyContent: "center" })}
  border-radius: 6px;
  cursor: pointer;
  word-break: keep-all;

  ${(props) => props.icon && getButtonPadding[props.size]};
  ${(props) => props && getButtonStyle[props.styleType]};
  ${(props) => props && getButtonSize[props.size]};
`;
