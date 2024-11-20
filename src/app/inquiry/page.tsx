"use client";

import { styled } from "styled-components";
import AppLayout from "@/layouts/AppLayout";
import { Text } from "@/ui";
import { color } from "@/styles";
import { flex } from "@/utils";
import InquiryTable from "@/components/inquiry/InquiryTable/InquiryTable";

const InquiryPage = () => {
  return (
    <AppLayout>
      <StyledInquiry>
        <Title>
          <Text fontType="H1" color={color.gray900}>
            문의 내역
          </Text>
          <Text fontType="B2" color={color.gray600}>
            문의들을 관리할 수 있어요
          </Text>
        </Title>
        <InquiryTable></InquiryTable>
      </StyledInquiry>
    </AppLayout>
  );
};

export default InquiryPage;

const StyledInquiry = styled.div`
  ${flex({ flexDirection: "column" })}
  gap: 40px;
  width: 100%;
  height: 100%;
  padding: 3.75rem 4rem 0rem 3.75rem;
  overflow: auto;
`;

const Title = styled.div`
  ${flex({ flexDirection: "column" })}
`;
