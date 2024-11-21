import { Text, Column, Row, SearchInput } from "@/ui";

import InquiryTableHeader from "./InquiryTableHeader/InquiryTableHeader";
import InquiryTableItem from "./InquiryTableItem/InquiryTableItem";
import styled from "styled-components";
import { color } from "@/styles";
import { Toggle } from "@/ui";
import { useState } from "react";

const InquiryTable = () => {
  const inquiryList = [
    {
      id: 1,
      title: "캐릭터가 제게 편지를 보내지 않아요",
      content: "슬픕니다...",
      state: "진행 중",
      date: "2024.09.25",
      time: "오후 11:25",
    },
    {
      id: 2,
      title: "캐릭터가 제게 편지를 보내지 않아요",
      content: "슬픕니다...",
      state: "진행 중",
      date: "2024.09.25",
      time: "오후 11:25",
    },
    {
      id: 3,
      title: "캐릭터가 제게 편지를 보내지 않아요",
      content: "슬픕니다...",
      state: "진행 중",
      date: "2024.09.25",
      time: "오후 11:25",
    },
    {
      id: 4,
      title: "캐릭터가 제게 편지를 보내지 않아요",
      content: "슬픕니다...",
      state: "진행 중",
      date: "2024.09.25",
      time: "오후 11:25",
    },
    {
      id: 5,
      title: "캐릭터가 제게 편지를 보내지 않아요",
      content: "슬픕니다...",
      state: "진행 중",
      date: "2024.09.25",
      time: "오후 11:25",
    },
  ];

  const inquiryCount = 100;
  const [inquiryType, setInquiryType] = useState("새로운 문의");

  const handleToggleChange = (value: string) => {
    setInquiryType(value);
  };

  return (
    <StyledInquiryTableStyled>
      <Column style={{ width: "100%" }}>
        <TableSetting>
          <Column gap={20}>
            <Row justifyContent="space-between">
              <Toggle
                data={["새로운 문의", "완료된 문의"]}
                value={inquiryType}
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
          {inquiryList &&
            inquiryList.map((item, index) => (
              <InquiryTableItem
                key={`inquiry item ${index}`}
                id={item.id}
                title={item.title}
                state={item.state}
                date={item.date}
                time={item.time}
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
