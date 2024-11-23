import { color } from "@/styles";
import { IconSearch } from "@public/icons/index";
import { flex } from "@/utils";
import styled from "styled-components";
import type { InputProps } from "./Input.type";

const SearchInput = ({
  width = 320,
  placeholder,
  type = "text",
  name,
  value,
  onChange,
}: InputProps) => {
  return (
    <StyledSearchInput>
      <IconSearch color={color.gray400} width={28} height={28} />
      <Input
        style={{ width }}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
      />
    </StyledSearchInput>
  );
};

export default SearchInput;

const StyledSearchInput = styled.div`
  ${flex({ alignItems: "center", justifyContent: "space-between" })}
  height: 40px;
  padding: 10px 16px;
  background-color: ${color.gray100};
  border-radius: 14px;
  gap: 12px;
`;

const Input = styled.input`
  color: ${color.gray800};
  width: 100%;
  height: 100%;
  background-color: ${color.gray100};

  &::placeholder {
    color: ${color.gray500};
  }
`;
