import { color, font } from "@/styles";
import type { TextareaHTMLAttributes } from "react";
import React from "react";
import styled, { css } from "styled-components";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  isError?: boolean;
  errorMessage?: string;
  message?: string;
  placeholder?: string;
}

const Textarea = ({
  name,
  value,
  onChange,
  isError = false,
  placeholder,
}: Props) => {
  const textValue = value as string;

  return (
    <StyledTextarea
      value={textValue}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={1000}
      $isError={isError}
    />
  );
};

export default Textarea;

const StyledTextarea = styled.textarea<{ $isError: boolean }>`
  ${font.B3}
  resize: none;
  padding: 10px 16px;
  border: 1px solid ${color.gray400};
  border-radius: 6px;
  width: 100%;
  height: 200px;
  &::placeholder {
    color: ${color.gray300};
  }

  ${(props) =>
    props.$isError &&
    css`
      border: 1px solid ${color.red};
      outline: 2px solid rgba(244, 67, 54, 0.25);

      &:focus {
        border: 1px solid ${color.red};
        outline: 2px solid rgba(244, 67, 54, 0.25);
      }
    `}
`;
