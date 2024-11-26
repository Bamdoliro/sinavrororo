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

interface Props {
  id: number;
}
const InquiryDetailContent = ({ id }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const data = [
    { id: 1, title: "lorem1", content: "ipsum", answer: "한국말로 문의주세요" },
    { id: 2, title: "lorem2", content: "ipsum" },
    { id: 3, title: "lorem3", content: "ipsum" },
    { id: 4, title: "lorem4", content: "ipsum" },
    { id: 5, title: "lorem5", content: "ipsum" },
  ];

  const overlay = useOverlay();

  const openInquiryWritingModal = useCallback(() => {
    overlay.open(({ isOpen, close }) => (
      <InquiryWritingModal
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

  return data ? (
    <StyledInquiryDetailContent>
      <Column gap={48}>
        <InquiryHeader>
          <Column gap={20}>
            <Text fontType="H2" color={color.gray900}>
              {data[id - 1].title}
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
            {data[id - 1].content}
          </Text>
          {data[id - 1].answer && (
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
                    {data[id - 1].answer}
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
