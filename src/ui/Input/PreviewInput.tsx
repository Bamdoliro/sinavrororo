import { color, font } from "@/styles";
import { useBooleanState } from "@/hooks";
import { IconInvisibleEye, IconVisibleEye } from "@public/svgs";
import { flex } from "@/utils";
import styled, { css } from "styled-components";
import type { InputProps } from "./Input.type";

const PreviewInput = ({
  width = 320,
  placeholder,
  name,
  label,
  value,
  isError = false,
  onChange,
  onKeyDown,
}: InputProps) => {
  const { value: isPreview, toggle: toggleIsPreview } = useBooleanState();

  return (
    <div style={{ width }}>
      {label && <Label>{label}</Label>}
      <div style={{ position: "relative" }}>
        <StyledPreviewInput $isError={isError}>
          <Input
            onChange={onChange}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            type={isPreview ? "text" : "password"}
            name={name}
            value={value}
          />
          {isPreview ? (
            <IconVisibleEye
              color={color.gray500}
              width={24}
              height={24}
              cursor="pointer"
              onClick={toggleIsPreview}
            />
          ) : (
            <IconInvisibleEye
              color={color.gray500}
              width={24}
              height={24}
              cursor="pointer"
              onClick={toggleIsPreview}
            />
          )}
        </StyledPreviewInput>
      </div>
    </div>
  );
};

export default PreviewInput;

const StyledPreviewInput = styled.div<{ $isError: boolean }>`
  ${flex({ alignItems: "center", justifyContent: "space-between" })}
  gap: 10px;
  height: 48px;
  padding: 10px 16px;
  background-color: ${color.white100};
  border: 1px solid ${color.gray400};
  border-radius: 6px;

  &:focus-within {
    border: 1px solid ${(props) => (props.$isError ? color.red : color.primary)};
    ${(props) =>
      !props.$isError &&
      css`
        outline: 2px solid rgba(254, 232, 231, 1);
      `}
  }

  ${(props) =>
    props.$isError &&
    css`
      border: 1px solid ${color.red};
      outline: 2px solid rgba(254, 232, 231, 1);
    `}
`;

const Input = styled.input`
  ${font.B3}
  color: ${color.gray800};
  width: 100%;
  height: 100%;

  &::placeholder {
    color: ${color.gray200};
  }
`;

const Label = styled.p`
  ${font.Headline1}
  color: ${color.gray600};
  margin-bottom: 8px;
`;
