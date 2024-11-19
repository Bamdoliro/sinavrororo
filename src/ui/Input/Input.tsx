import { color, font } from "@/styles";
import { IconCalendar, IconTime, IconError } from "@public/svgs/index";
import React from "react";
import styled, { css } from "styled-components";
import type { InputProps } from "./Input.type";

const Input = ({
  width = 320,
  label,
  placeholder,
  type = "text",
  name,
  value,
  icon,
  onChange,
  readOnly,
  textAlign,
  isError = false,
}: InputProps) => {
  return (
    <div style={{ width }}>
      {label && <Label>{label}</Label>}
      <div style={{ position: "relative" }}>
        <StyledInput
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          name={name}
          value={value}
          readOnly={readOnly}
          style={{ textAlign }}
          $isError={isError}
        />
        {isError ? (
          <IconError
            style={{
              position: "absolute",
              right: 16,
              top: "50%",
              transform: "translateY(-50%)",
            }}
            width={24}
          />
        ) : icon === "CALENDAR" ? (
          <IconCalendar
            style={{
              position: "absolute",
              right: 16,
              top: "50%",
              transform: "translateY(-50%)",
            }}
            width={24}
            height={24}
          />
        ) : icon === "TIME" ? (
          <IconTime
            style={{
              position: "absolute",
              right: 16,
              top: "50%",
              transform: "translateY(-50%)",
            }}
            width={24}
            height={24}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Input;

const StyledInput = styled.input<{ $isError: boolean }>`
  ${font.B3}
  color: ${color.gray900};
  height: 48px;
  width: 100%;
  padding: 10px 16px;
  background-color: ${color.white100};
  border: 1px solid ${color.gray500};
  border-radius: 6px;

  &::placeholder {
    color: ${color.gray600};
  }
  &:focus {
    border: 1px solid ${color.primary};
    outline: 2px solid rgba(255, 221, 207, 1);
  }

  ${(props) =>
    props.$isError &&
    css`
      border: 1px solid ${color.red};
      outline: 2px solid rgba(254, 232, 231, 1);
    `}
`;

const Label = styled.p`
  ${font.Headline1}
  color: ${color.gray600};
  margin-bottom: 8px;
`;
