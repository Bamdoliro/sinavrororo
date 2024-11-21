import { color, font } from "@/styles";
import { Button, Column, Row, Text } from "@/ui/index";
import { flex } from "@/utils";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/common/constants";

const AlarmBox = () => {
  const AlarmCount = 2;
  const router = useRouter();

  const TIME_DATA = ["12:00", "22:00"];

  return (
    <StyledApplicationBox onClick={() => router.push(ROUTES.FAQ)}>
      <Column>
        <Row justifyContent="space-between">
          <Text fontType="Heading2" color={color.gray900}>
            설정한 알림
          </Text>
        </Row>
        <Text fontType="B2" color={color.gray600}>
          오늘 푸시될 알람 {AlarmCount}개
        </Text>
      </Column>
      <Row gap={4}>
        {TIME_DATA.map((time, index) => (
          <TimeBox key={`time-data ${index}`}>{time}</TimeBox>
        ))}
      </Row>
      <Button
        size="LARGE"
        styleType="TERTIARY"
        style={{ whiteSpace: "nowrap" }}
      >
        알림 설정으로 이동
      </Button>
    </StyledApplicationBox>
  );
};

export default AlarmBox;

const StyledApplicationBox = styled.div`
  ${flex({ flexDirection: "column", justifyContent: "space-between" })}
  width: 480px;
  height: 248px;
  padding: 28px 32px;
  border: 1px solid ${color.gray200};
  border-radius: 12px;
  gap: 16px;
  cursor: pointer;
`;

const TimeBox = styled.div`
  ${font.Heading5}
  border: 1px solid ${color.adminGray400};
  border-radius: 999px;
  padding: 6px 12px;
  color: ${color.gray600};
`;
