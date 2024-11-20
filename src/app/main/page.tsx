"use client";

import { styled } from "styled-components";
import AppLayout from "@/layouts/AppLayout";
import { Column, Text } from "@/ui";
import { color } from "@/styles";
import { flex } from "@/utils";
import InquiryBox from "@/components/main/InquiryBox/InquiryBox";
import AlarmBox from "@/components/main/AlarmBox/AlarmBox";

const HomePage = () => {
  return (
    <AppLayout>
      <StyledHome>
        <Title>
          <Text fontType="H1" color={color.gray900}>
            어드민 홈
          </Text>
          <Text fontType="B2" color={color.gray600}>
            시나브로에서 쌓인 업무를 볼 수 있어요.
          </Text>
        </Title>
        <Column gap={24}>
          <InquiryBox />
          <AlarmBox />
        </Column>
      </StyledHome>
    </AppLayout>
  );
};

export default HomePage;

const StyledHome = styled.div`
  ${flex({ flexDirection: "column" })}
  gap: 70px;
  width: 100%;
  height: 100%;
  padding: 3.75rem 4rem;
  overflow: auto;
`;

const Title = styled.div`
  ${flex({ flexDirection: "column" })}
`;
