import { color } from "@/styles";
import { Button, Column, Input, Row, Text } from "@/ui";
import { formatClearDate, formatTime } from "@/utils";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";

const AlarmSetting = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setDate(formatClearDate(value));
  };

  const handleTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTime(formatTime(value));
  };

  return (
    <AlarmSettingContent>
      <AlarmSettingBox>
        <Column gap={80} alignItems="center">
          <Column gap={24}>
            <Input
              label="푸시 알림 내용"
              placeholder="푸시 알림의 내용을 삽입해주세요"
            ></Input>
            <Column gap={8}>
              <Text fontType="Headline1" color={color.gray600}>
                알림 유형
              </Text>
              <Row gap={10}>
                <Button styleType="SECONDARY" size="SELECT">
                  요일 반복
                </Button>
                <Button styleType="SECONDARY" size="SELECT">
                  요일 반복
                </Button>
              </Row>
            </Column>
            <Input
              label="날짜 (8자리)"
              placeholder="            -            -"
              icon="CALENDAR"
              value={date}
              onChange={handleDateChange}
            ></Input>
            <Input
              label="시간 (4자리)"
              placeholder="            :"
              icon="TIME"
              value={time}
              onChange={handleTimeChange}
            ></Input>
          </Column>
          <Row>
            <Button size="SMALL">새로운 알림 설정하기</Button>
          </Row>
        </Column>
      </AlarmSettingBox>
    </AlarmSettingContent>
  );
};

export default AlarmSetting;

const AlarmSettingContent = styled.div`
  background-color: ${color.gray50};
  border: 1px solid ${color.gray250};
  border-radius: 12px;
`;

const AlarmSettingBox = styled.div`
  padding: 56px 70px;
`;
