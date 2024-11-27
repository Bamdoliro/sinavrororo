import { useSetInquiryListStatusTypeStore } from "@/store/inquiry/inquiry";
import { color } from "@/styles";
import { InquiryStatusType } from "@/types/inquiry/client";
import { Dropdown, Row } from "@/ui";
import { flex } from "@/utils";
import styled from "styled-components";

const InquiryTableHeader = () => {
  const setInquiryStatusType = useSetInquiryListStatusTypeStore();

  const handleChangeStatusSort = (value: string) => {
    setInquiryStatusType(value as InquiryStatusType);
  };

  return (
    <StyledInquiryTableHeader>
      <Row
        gap={48}
        alignItems="center"
        justifyContent="flex-end"
        style={{ width: "100%" }}
      >
        <Row gap={76}>
          <Dropdown
            data={[
              { value: "WAITING", label: "대기" },
              { value: "IN_PROGRESS", label: "진행" },
              { value: "COMPLETED", label: "완료" },
            ]}
            onChange={handleChangeStatusSort}
            name="statusSort"
            label="상태"
          />
          <Dropdown
            data={[
              { value: "FAST", label: "빠른 순" },
              { value: "SLOW", label: "느린 순" },
            ]}
            onChange={() => {}}
            name="orderSort"
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
  padding:8px 40px;
  width: 100%;
  border-top: 1px solid ${color.adminGray400};
  border-bottom: 1px solid ${color.adminGray400};
`;
