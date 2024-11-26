import { color } from "@/styles";
import { Column, Text, Button, Row } from "@/ui";
import { flex } from "@/utils";
import styled from "styled-components";
import { InquiryWritingModal } from "@/components/common";
import StatusChangeModal from "./ChangeStatusModal/ChangeStatusModal";
import { useCallback, useState } from "react";
import { useOverlay } from "@toss/use-overlay";
import IconArrowDown from "@public/icons/IconArrowDown";
import { IconArrowUp } from "@public/icons";
import { useInquiryDetailQuery } from "@/services/inquiry/queries";

interface Props {
  id: number;
}
const InquiryDetailContent = ({ id }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const { data: inquiryDetailData } = useInquiryDetailQuery(id);
  const overlay = useOverlay();

  const openInquiryWritingModal = useCallback(() => {
    overlay.open(({ isOpen, close }) => (
      <InquiryWritingModal
        id={id}
        isOpen={isOpen}
        onClose={close}
        onConfirm={() => close()}
      />
    ));
  }, [overlay]);

  const openInquiryStatusChainging = useCallback(() => {
    overlay.open(({ isOpen, close }) => (
      <StatusChangeModal id={id} isOpen={isOpen} onClose={close} />
    ));
  }, [overlay, id]);

  return inquiryDetailData ? (
    <StyledInquiryDetailContent>
      <Column gap={48}>
        <InquiryHeader>
          <Column gap={20}>
            <Text fontType="H2" color={color.gray900}>
              {inquiryDetailData.title}
            </Text>
          </Column>
          <Row gap={16} alignItems="flex-end">
            <Button
              size="SMALL"
              styleType="QUATERNARY"
              width={156}
              onClick={openInquiryStatusChainging}
            >
              상태 변경
            </Button>
            <Button size="SMALL" width={156} onClick={openInquiryWritingModal}>
              답글 남기기
            </Button>
          </Row>
        </InquiryHeader>
        <Column gap={40}>
          <Text fontType="B1" color={color.gray600}>
            {inquiryDetailData.content}
          </Text>
          {inquiryDetailData.answerResponseList && (
            <Answer
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
            >
              <Column gap={20}>
                <Row alignItems="center">
                  <Text fontType="B3">밤돌이로의 답변 보기</Text>
                  {isOpen ? <IconArrowUp /> : <IconArrowDown />}
                </Row>
                {isOpen && (
                  <Text fontType="B1" color={color.gray600}>
                    {inquiryDetailData.answerResponseList
                      .map((answer) => answer.content)
                      .join("\n")}
                  </Text>
                )}
              </Column>
            </Answer>
          )}
        </Column>
      </Column>
    </StyledInquiryDetailContent>
  ) : null;
};

export default InquiryDetailContent;

const StyledInquiryDetailContent = styled.div`
  ${flex({ flexDirection: "column" })}
  padding-top: 28px;
`;

const InquiryHeader = styled.div`
  ${flex({ justifyContent: "space-between" })}
  width: 100%;
  border-bottom: 1px solid ${color.gray300};
  padding-bottom: 16px;
`;

const Answer = styled.div`
  cursor: pointer;
`;
