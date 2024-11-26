import { ROUTES } from "@/constants/common/constants";
import { color } from "@/styles";
import { Column, Row, Text } from "@/ui";
import Link from "next/link";
import styled from "styled-components";

interface Inquiry {
  id: number;
  title: string;
  state: string;
  date: string;
  time: string;
}

const InquiryTableItem = ({ id, title, state, date, time }: Inquiry) => {
  return (
    <Link href={`${ROUTES.INQUIRY}/${id}`} style={{ width: "100%" }}>
      <StyledInquiryTableItem style={{ cursor: "pointer" }}>
        <TableItem>
          <Row gap={48} alignItems="center">
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
    </Link>
  );
};

export default InquiryTableItem;

const StyledInquiryTableItem = styled.button`
  text-align: start;
  width: 100%;
`;

const TableItem = styled.div`
  padding: 14px 40px;
  border-bottom: 1px solid ${color.adminGray400};
`;
