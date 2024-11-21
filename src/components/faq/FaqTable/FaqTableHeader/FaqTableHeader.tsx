import { color } from "@/styles";
import { Dropdown, Row } from "@/ui";
import { flex } from "@/utils";
import styled from "styled-components";

const FaqTableHeader = () => {
  return (
    <StyledFaqTableHeader>
      <Row
        gap={48}
        alignItems="center"
        style={{ width: "100%" }}
        justifyContent="flex-end"
      >
        <Dropdown
          data={[
            { value: "빠른 순", label: "빠른 순" },
            { value: "느린 순", label: "느린 순" },
          ]}
          onChange={() => {}}
          name="드라"
          label="등록 일시"
        />
      </Row>
    </StyledFaqTableHeader>
  );
};

export default FaqTableHeader;

const StyledFaqTableHeader = styled.div`
  ${flex({ alignItems: "center" })}
  background-color: ${color.gray100};
  padding: 8px 128px;
  width: 100%;
  border-top: 1px solid ${color.adminGray400};
  border-bottom: 1px solid ${color.adminGray400};
`;
