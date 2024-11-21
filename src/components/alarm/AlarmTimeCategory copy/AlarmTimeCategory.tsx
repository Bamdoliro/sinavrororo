import React from "react";
import styled from "styled-components";
import { Row, Text } from "@/ui";
import { color } from "@/styles";
import { flex } from "@/utils";

const alarmData = [
  {
    time: "오전 7시 20분",
    message: '"오늘 하루도 힘내세요!"',
    repeatType: "계속 반복",
  },
  {
    time: "오후 1시 00분",
    message: '"졸지말고 남은 시간도 화이팅!"',
  },
  {
    time: "오전 7시 20분",
    message: '"오늘 하루도 힘내세요!"',
    repeatType: "수요일 반복",
  },
  {
    time: "오후 8시 00분",
    message: '"{캐릭터 이름}이 친구를 기다리고 있어요!"',
  },
];

const AlarmTimeCategory: React.FC = () => {
  return (
    <Container>
      {alarmData.map((alarm, index) => (
        <AlarmCard key={index}>
          <Row justifyContent="space-between">
            <Text fontType="Heading2" color={color.gray900}>
              {alarm.time}
            </Text>
            {alarm.repeatType && <RepeatType>{alarm.repeatType}</RepeatType>}
          </Row>
          <Text fontType="B2" color={color.gray600}>
            {alarm.message}
          </Text>
        </AlarmCard>
      ))}
    </Container>
  );
};

export default AlarmTimeCategory;

const Container = styled.div`
  ${flex({ alignItems: "flex-start" })}
  flex-wrap: wrap;
  align-content: flex-start;
  width: 980px;
  gap: 20px;
`;

const AlarmCard = styled.div`
  ${flex({ flexDirection: "column" })}
  border: 1px solid ${color.adminGray400};
  border-radius: 12px;
  padding: 24px 28px;
  gap: 10px;
  width: 480px;
`;

const RepeatType = styled.div`
  ${flex({ alignItems: "center" })}
  padding: 8px 20px;
  border-radius: 999px;
  background-color: ${color.primary};
  color: ${color.white100};
`;
