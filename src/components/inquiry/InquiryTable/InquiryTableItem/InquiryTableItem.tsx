import { ROUTES } from "@/constants/common/constants";
import { INQUIRY_STATUS_CATEGORY } from "@/constants/inquiry/constants";
import { color } from "@/styles";
import { InquiryStatusType } from "@/types/inquiry/client";
import { Column, Row, Text } from "@/ui";
import { formatDotDate, formatDotTime } from "@/utils";
import Link from "next/link";
import styled from "styled-components";

interface Inquiry {
  id: number;
  title: string;
  status: string;
  updateAt: string;
}

const InquiryTableItem = ({ id, title, status, updateAt }: Inquiry) => {
  const date = formatDotDate(updateAt);
  const time = formatDotTime(updateAt);

  return (
    <Link href={`${ROUTES.INQUIRY}/${id}`} style={{ width: "100%" }}>
      <StyledInquiryTableItem style={{ cursor: "pointer" }}>
        <TableItem>
          <Row gap={48} alignItems="center" justifyContent="space-between">
            <Text fontType="B2" width={"68%"}>
              {title}
            </Text>
            <Row gap={92}>
              <Row justifyContent="center" alignItems="center">
                <Text
                  fontType="B3"
                  width={70}
                  color={color.gray400}
                  textAlign="center"
                >
                  {status
                    ? INQUIRY_STATUS_CATEGORY[status as InquiryStatusType]
                    : undefined}
                </Text>
              </Row>
              <Column alignItems="center">
                <Text fontType="B3" width={80} color={color.gray400}>
                  {date}
                </Text>
                <Text fontType="B3" width={70} color={color.gray400}>
                  {time}
                </Text>
              </Column>
            </Row>
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
