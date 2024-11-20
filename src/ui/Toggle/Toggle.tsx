import { color, font } from "@/styles";
import { flex } from "@/utils";
import styled, { css } from "styled-components";
import { useState } from "react";

interface Data {
  value: string;
  label: string;
}

interface Props {
  data: Data[] | string[];
  value?: string;
  onChange: (value: string, name: string) => void;
}

const Toggle = ({ data, onChange }: Props) => {
  const initialValue =
    typeof data[0] === "string" ? data[0] : (data[0] as Data).value;
  const [selectedValue, setSelectedValue] = useState(initialValue);

  const handleButtonClick = (newValue: string) => {
    setSelectedValue(newValue);
    onChange(newValue, "toggle");
  };

  return (
    <ButtonGroup>
      {data?.map((item, index) => {
        const isString = typeof item === "string";
        const toggleLabel = isString ? item : item.label;
        const toggleValue = isString ? item : item.value;
        return (
          <StyledButton
            key={`toggle ${index}`}
            isSelected={selectedValue === toggleValue}
            onClick={() => handleButtonClick(toggleValue)}
          >
            {toggleLabel}
          </StyledButton>
        );
      })}
    </ButtonGroup>
  );
};

export default Toggle;

const ButtonGroup = styled.div`
  ${flex({ alignItems: "center" })}
  background-color: ${color.gray100};
  padding: 6px;
  border-radius: 14px;
  width: fit-content;
  gap: 8px;
`;

const StyledButton = styled.button<{ isSelected: boolean }>`
  ${flex({ alignItems: "center", justifyContent: "center" })}
  ${font.Heading5}
  padding: 8px 20px;
  border-radius: 8px;
  cursor: pointer;
  word-break: keep-all;
  font-size: 14px;
  transition: all 0.2s ease;
  border: none;
  background-color: transparent;
  color: ${color.gray400};

  ${(props) =>
    props.isSelected &&
    css`
      background-color: ${color.primary};
      color: ${color.white100};
    `}
`;
