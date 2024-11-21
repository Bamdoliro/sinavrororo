import React from "react";
import styled, { css } from "styled-components";
import { flex, formatDate } from "@/utils";
import { Row } from "@/ui";
import { color, font } from "@/styles";

const AlarmDateCategory: React.FC = () => {
  const today = new Date();

  const dates = Array.from({ length: 8 }, (_, i) => {
    const date = new Date(today.getTime() + (i - 3) * 86400000);
    return {
      date,
      isToday: i === 4,
    };
  });

  return (
    <Row gap={20}>
      {dates.map((item, index) => (
        <DateItem key={index} isToday={item.isToday}>
          <DateMonth isToday={item.isToday}>
            {formatDate(item.date.toISOString(), "m")}
          </DateMonth>
          <DateDay isToday={item.isToday}>
            {formatDate(item.date.toISOString(), "d")}
          </DateDay>
        </DateItem>
      ))}
    </Row>
  );
};

export default AlarmDateCategory;

const DateItem = styled.div<{ isToday: boolean }>`
  ${flex({ flexDirection: "column" })}
  padding: 20px 40px 8px 12px;
  background-color: ${color.white100};
  border: 1px solid ${color.adminGray400};
  border-radius: 14px;
  gap: 16px;
  cursor: pointer;

  ${(props) =>
    props.isToday &&
    css`
      background: ${color.primary};
    `};
`;

const DateMonth = styled.div<{ isToday: boolean }>`
  ${font.B3}
  color: ${color.gray400}

  ${(props) =>
    props.isToday &&
    css`
      color: ${color.gray900};
    `}
`;

const DateDay = styled.div<{ isToday: boolean }>`
  ${font.Heading1}
  color: ${color.gray600}

  ${(props) =>
    props.isToday &&
    css`
      color: ${color.gray900};
    `}
`;
