import { color } from "@/styles";
import { CheckBox, Column, Row, Text } from "@/ui";
import { useState } from "react";
import styled from "styled-components";

interface Inquiry {
  title: string;
  state: string;
  date: string;
  time: string;
}

const InquiryTableItem = ({ title, state, date, time }: Inquiry) => {
  const [isInquirySelecting] = useState(false);

  return (
    <StyledInquiryTableItem style={{ cursor: "pointer" }}>
      <TableItem>
        <Row gap={48} alignItems="center">
          <CheckBox checked={isInquirySelecting} />
          <Text fontType="B2" width={"68%"}>
            {title}
          </Text>
          <Text fontType="B3" width={70} color={color.gray400}>
            {state}
          </Text>
          <Column alignItems="center">
            <Text fontType="B3" width={80} color={color.gray400}>
              {date}
            </Text>
            <Text fontType="B3" width={70} color={color.gray400}>
              {time}
            </Text>
          </Column>
        </Row>
      </TableItem>
    </StyledInquiryTableItem>
  );
};

export default InquiryTableItem;

const StyledInquiryTableItem = styled.button`
  text-align: start;
`;

const TableItem = styled.div`
  padding: 14px 40px;
  border-bottom: 1px solid ${color.adminGray400};
`;
