import styled from "styled-components";
import { color } from "@/styles";
import { Button, Column, Input, Row } from "@/ui";
import { flex } from "@/utils";
import { ChangeEventHandler, useState } from "react";
import { useAlarmPostAction } from "./AlarmSetting.hooks";

const AlarmSetting = () => {
  const [alarmData, setAlarmData] = useState({
    title: "",
    body: "",
  });

  const handleAlarmDataChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const { name, value } = e.target;
    setAlarmData({ ...alarmData, [name]: value });
  };

  const { handleAlarmPostButtonClick } = useAlarmPostAction(alarmData);

  return (
    <AlarmSettingContent>
      <AlarmSettingBox>
        <Column gap={152} alignItems="center">
          <Column gap={24}>
            <Input
              name="title"
              label="푸시 알림 제목"
              placeholder="푸시 알림의 제목을 삽입해주세요"
              onChange={handleAlarmDataChange}
              value={alarmData.title}
            />
            <Input
              name="body"
              label="푸시 알림 내용"
              placeholder="푸시 알림의 내용을 삽입해주세요"
              onChange={handleAlarmDataChange}
              value={alarmData.body}
            />
          </Column>
          <Row>
            <Button size="SMALL" onClick={handleAlarmPostButtonClick}>
              알림 전송하기
            </Button>
          </Row>
        </Column>
      </AlarmSettingBox>
    </AlarmSettingContent>
  );
};

export default AlarmSetting;

const AlarmSettingContent = styled.div`
  ${flex({ justifyContent: "center", alignItems: "center" })}
`;

const AlarmSettingBox = styled.div`
  background-color: ${color.gray50};
  padding: 56px 70px;
  border-radius: 12px;
`;
