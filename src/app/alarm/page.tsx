"use client";

import { styled } from "styled-components";
import AppLayout from "@/layouts/AppLayout";
import { Button, Row, Text } from "@/ui";
import { color } from "@/styles";
import { flex } from "@/utils";
import AlarmDateCategory from "@/components/alarm/AlarmDateCategory/AlarmDateCategory";
import AlarmTimeCategory from "@/components/alarm/AlarmTimeCategory copy/AlarmTimeCategory";
import useCTAButton from "./alarm.hooks";

const FaqPage = () => {
  const { handleGoAlarmSettingPageButtonClick } = useCTAButton();

  return (
    <AppLayout>
      <StyledFaq>
        <Row justifyContent="space-between" alignItems="center">
          <Title>
            <Text fontType="H1" color={color.gray900}>
              알림
            </Text>
            <Text fontType="B2" color={color.gray600}>
              울릴 알림을 관리할 수 있어요.
            </Text>
          </Title>
          <Button
            icon="ADD_ICON"
            size="ICON"
            onClick={handleGoAlarmSettingPageButtonClick}
          >
            알림 생성
          </Button>
        </Row>
        <AlarmDateCategory />
        <AlarmTimeCategory />
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
  padding: 3.75rem 4rem 0rem 3.75rem;
  overflow: auto;
`;

const Title = styled.div`
  ${flex({ flexDirection: "column" })}
`;
