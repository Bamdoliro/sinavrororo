import { Text, Column, Row, SearchInput } from "@/ui";
import InquiryTableHeader from "./InquiryTableHeader/InquiryTableHeader";
import InquiryTableItem from "./InquiryTableItem/InquiryTableItem";
import styled from "styled-components";
import { color } from "@/styles";
import { Toggle } from "@/ui";
import { useInquiryListQuery } from "@/services/inquiry/queries";
import { useInquiryListStatusTypeStore } from "@/store/inquiry/inquiry";
import { InquiryStatusType } from "@/types/inquiry/client";

const InquiryTable = () => {
  const { data: InquiryList } = useInquiryListQuery();

  const inquiryCount = InquiryList?.length;
  const [inquiryStatusType, setInquiryStatusType] =
    useInquiryListStatusTypeStore();

  const handleToggleChange = (value: string) => {
    setInquiryStatusType(value as InquiryStatusType);
  };

  return (
    <StyledInquiryTableStyled>
      <Column style={{ width: "100%" }}>
        <TableSetting>
          <Column gap={20}>
            <Row justifyContent="space-between">
              <Toggle
                data={[
                  { value: "WAITING", label: "새로운 문의" },
                  { value: "COMPLETED", label: "완료된 문의" },
                ]}
                value={inquiryStatusType}
                onChange={handleToggleChange}
              />
              <SearchInput placeholder="찾고 싶은 문의를 검색해주세요" />
            </Row>
            <Text fontType="B3" color={color.gray600}>
              문의 {inquiryCount}개
            </Text>
          </Column>
        </TableSetting>
        <InquiryTableHeader />
        <InquiryTableItemContainer>
          {InquiryList &&
            InquiryList.map((item, index) => (
              <InquiryTableItem
                key={`inquiry item ${index}`}
                id={item.id}
                title={item.title}
                status={item.status}
                updateAt={item.updatedAt}
              />
            ))}
        </InquiryTableItemContainer>
      </Column>
    </StyledInquiryTableStyled>
  );
};

export default InquiryTable;

const StyledInquiryTableStyled = styled.div`
  border: 1px solid ${color.adminGray400};
  border-radius: 32px 32px 0 0;
  height: 100vh;
`;

const TableSetting = styled.div`
  padding: 40px 40px 14px 40px;
`;

const InquiryTableItemContainer = styled.div`
  height: 100%;
  overflow: auto;
`;
