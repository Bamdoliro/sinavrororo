import { color } from "@/styles";
import { Dropdown, Row } from "@/ui";
import { flex } from "@/utils";
import styled from "styled-components";

const InquiryTableHeader = () => {
  return (
    <StyledInquiryTableHeader>
      <Row
        gap={48}
        alignItems="center"
        justifyContent="space-between"
        style={{ width: "100%" }}
      >
        <Row gap={76} alignItems="center">
          <Dropdown
            data={[
              { value: "진행", label: "계속" },
              { value: "진행", label: "중단" },
              { value: "대기", label: "대기" },
              { value: "진행", label: "진행" },
            ]}
            onChange={() => {}}
            name="드랍다운"
            label="상태"
          />
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
      </Row>
    </StyledInquiryTableHeader>
  );
};

export default InquiryTableHeader;

const StyledInquiryTableHeader = styled.div`
  ${flex({ alignItems: "center" })}
  background-color: ${color.gray100};
  padding: 8px 40px;
  width: 100%;
  border-top: 1px solid ${color.adminGray400};
  border-bottom: 1px solid ${color.adminGray400};
`;
