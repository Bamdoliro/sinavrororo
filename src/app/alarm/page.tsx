"use client";

import { styled } from "styled-components";
import AppLayout from "@/layouts/AppLayout";
import { Column, Row, Text } from "@/ui";
import { color } from "@/styles";
import { flex } from "@/utils";
import AlarmSetting from "@/components/alarm/AlarmSetting/AlarmSetting";

const FaqPage = () => {
  return (
    <AppLayout>
      <StyledFaq>
        <Column style={{ height: "100%" }}>
          <Title>
            <Text fontType="H1" color={color.gray900}>
              알림
            </Text>
            <Text fontType="B2" color={color.gray600}>
              울릴 알림을 관리할 수 있어요.
            </Text>
          </Title>
          <Row justifyContent="center" style={{ height: "100%" }}>
            <AlarmSetting />
          </Row>
        </Column>
      </StyledFaq>
    </AppLayout>
  );
};

export default FaqPage;

const StyledFaq = styled.div`
  ${flex({ flexDirection: "column" })}
  gap: 40px;
  width: 100%;
  height: 100%;
  padding: 3.75rem 4rem 3.75rem 3.75rem;
  overflow: auto;
`;

const Title = styled.div`
  ${flex({ flexDirection: "column" })}
`;
