import { color } from "@/styles";
import { flex } from "@/utils";
import { styled } from "styled-components";
import { IconCheck } from "@public/svgs";
import { useState } from "react";

interface Props {
  name?: string;
  value?: string | number;
  checked?: boolean;
  onCheckChange?: (checked: boolean) => void;
}

const CheckBox = ({ name, value, checked = false, onCheckChange }: Props) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);

    if (onCheckChange) {
      onCheckChange(newChecked);
    }
  };

  return (
    <StyledCheckBox>
      <Input
        type="checkbox"
        checked={isChecked}
        name={name}
        value={value}
        onChange={handleChange}
      />
      {isChecked && (
        <CheckIconWrapper>
          <IconCheck />
        </CheckIconWrapper>
      )}
    </StyledCheckBox>
  );
};

export default CheckBox;

const StyledCheckBox = styled.div`
  ${flex({ alignItems: "center", justifyContent: "center" })}
  position: relative;
  width: 24px;
  height: 24px;
`;

const Input = styled.input`
  appearance: none;
  width: 24px;
  height: 24px;
  border: 2px solid ${color.adminGray400};
  background-color: white;
  cursor: pointer;
  position: absolute;

  &:checked {
    background-color: ${color.primary};
    border-color: ${color.primary};
  }
`;

const CheckIconWrapper = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 50%;
  left: 50%;
  transform: translate(-75%, -75%);
  pointer-events: none;
`;
