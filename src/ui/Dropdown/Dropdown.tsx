import { color } from "@/styles";
import { useBooleanState, useOutsideClick } from "@/hooks";
import { IconArrowBottom } from "@public/icons";
import { flex } from "@/utils";
import type { CSSProperties } from "react";
import React from "react";
import styled, { css } from "styled-components";
import Text from "../Text/Text";

type DropdownSizeOption = "MEDIUM" | "SMALL";

interface Data {
  value: string;
  label: string;
}

interface Props {
  label?: string;
  data: Data[] | string[];
  width?: CSSProperties["width"];
  size?: DropdownSizeOption;
  value?: string;
  onChange: (value: string, name: string) => void;
  name: string;
  placeholder?: string;
  doubled?: number;
  disabled?: boolean;
}

const Dropdown = ({
  label,
  data,
  size = "MEDIUM",
  onChange,
  name,
  doubled,
  disabled = false,
}: Props) => {
  const {
    value: isOpen,
    setFalse: closeDropdown,
    toggle: handleToggleButtonClick,
  } = useBooleanState();
  const dropdownRef = useOutsideClick(closeDropdown);

  const handleDropdownItemButtonClick = (data: string) => {
    if (!disabled) {
      onChange(data, name);
      closeDropdown();
    }
  };

  const handleDropdownClick = () => {
    if (!disabled) {
      handleToggleButtonClick();
    }
  };

  return (
    <div ref={dropdownRef}>
      <StyledDropdown
        size={size}
        onClick={handleDropdownClick}
        $isOpen={isOpen}
        disabled={disabled}
      >
        <Text fontType="B3" color={color.gray900} ellipsis={true}>
          {label}
        </Text>
        <IconArrowBottom color={color.gray900} width={18} height={18} />
      </StyledDropdown>
      <DropdownListBox $isOpen={isOpen && !disabled}>
        <DropdownList $isMultiple={data.length > (doubled ?? 100)}>
          {data?.map((item, index) => {
            const isString = typeof item === "string";
            const dropdownLabel = isString ? item : item.label;
            const dropdownValue = isString ? item : item.value;
            return (
              <DropdownItem
                key={`dropdown ${index}`}
                onClick={() => handleDropdownItemButtonClick(dropdownValue)}
              >
                {dropdownLabel}
              </DropdownItem>
            );
          })}
        </DropdownList>
      </DropdownListBox>
    </div>
  );
};

export default Dropdown;

const StyledDropdown = styled.div<{
  $isOpen: boolean;
  size: DropdownSizeOption;
  disabled: boolean;
}>`
  ${flex({ alignItems: "center", justifyContent: "center" })}
  border-radius: 6px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  background-color: transparent;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  gap: 4px;
  min-width: 79px;

  ${(props) =>
    props.size === "MEDIUM"
      ? css`
          height: 42px;
        `
      : css`
          height: 40px;
          padding: 10px 10px 10px 16px;
        `}
`;

const DropdownListBox = styled.div<{ $isOpen: boolean }>`
  position: relative;
  display: ${(props) => (props.$isOpen ? "block" : "none")};
`;

const DropdownList = styled.div<{ $isMultiple?: boolean }>`
  display: grid;
  z-index: 1;
  position: absolute;
  right: 0px;
  top: 0px;
  margin-top: 8px;
  padding: 8px 0px;
  width: ${(props) => (props.$isMultiple ? "200%" : "100%")};
  background-color: ${color.white100};
  box-shadow: 0px 15px 4px 0px rgba(54, 54, 54, 0),
    0px 10px 4px 0px rgba(54, 54, 54, 0.01),
    0px 6px 3px 0px rgba(54, 54, 54, 0.05),
    0px 2px 2px 0px rgba(54, 54, 54, 0.09),
    0px 1px 1px 0px rgba(54, 54, 54, 0.1);
  grid-template-columns: ${(props) => (props.$isMultiple ? "1fr 1fr" : "1fr")};
  border-radius: 6px;
`;

const DropdownItem = styled.button`
  ${flex({ alignItems: "center" })}
  width: 100%;
  height: 42px;
  text-align: left;
  padding: 10px 16px 10px 14px;
  color: ${color.gray900};

  cursor: pointer;
  &:hover {
    background-color: ${color.gray100};
  }
`;
