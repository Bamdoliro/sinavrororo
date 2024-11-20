import { color } from "@/styles";
import { CheckBox, Row, Text } from "@/ui";
import { useState } from "react";
import styled from "styled-components";

interface Inquiry {
  title: string;
  state: string;
  date: string;
}

const InquiryTableItem = ({ title, state, date }: Inquiry) => {
  const [isInquirySelecting] = useState(false);

  return (
    <StyledInquiryTableItem style={{ cursor: "pointer" }}>
      <TableItem>
        <Row gap={48} alignItems="center">
          <CheckBox checked={isInquirySelecting} />
          <Text fontType="B2" width={"68%"}>
            {title}
          </Text>
          <Text fontType="B3" width={80} color={color.gray400}>
            {state}
          </Text>
          <Text
            fontType="B3"
            width={70}
            color={color.gray400}
            whiteSpace="normal"
            style={{ lineHeight: "1rem" }}
          >
            {date}
          </Text>
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
  border-top: 1px solid ${color.adminGray400};
`;
