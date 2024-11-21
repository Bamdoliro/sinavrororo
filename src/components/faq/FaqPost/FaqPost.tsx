import { color, font } from "@/styles";
import { Column, Text, Button, Row, Textarea } from "@/ui";
import { flex, resizeTextarea } from "@/utils";
import styled from "styled-components";
import { InquiryWritingModal } from "@/components/common";
import { ChangeEventHandler, useCallback, useRef, useState } from "react";
import { useOverlay } from "@toss/use-overlay";

interface Props {
  id: number;
}
const InquiryDetailContent = ({ id }: Props) => {
  const contentTextareaRef = useRef<HTMLTextAreaElement>(null);

  const [faqData, setFaqData] = useState({
    title: "",
    content: "",
  });

  const handleFaqDataChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const { name, value } = e.target;
    setFaqData({ ...faqData, [name]: value });

    resizeTextarea(contentTextareaRef);
  };

  return (
    <StyledInquiryDetailContent>
      <Column gap={48}>
        <InquiryHeader>
          <Column gap={20}>
            <TitleInput
              name="title"
              value={faqData.title}
              onChange={handleFaqDataChange}
              placeholder="제목을 입력해주세요"
            />
          </Column>
          <Row gap={16} alignItems="flex-end">
            <Button size="SMALL" width={156} onClick={() => {}}>
              답글 남기기
            </Button>
          </Row>
        </InquiryHeader>
        <Column>
          <ContentTextarea
            ref={contentTextareaRef}
            name="content"
            value={faqData.content}
            onChange={handleFaqDataChange}
            placeholder="내용을 작성해주세요."
            rows={1}
          />
        </Column>
      </Column>
    </StyledInquiryDetailContent>
  );
};

export default InquiryDetailContent;

const StyledInquiryDetailContent = styled.div`
  ${flex({ flexDirection: "column" })}
  padding-top: 28px;
`;

const InquiryHeader = styled.div`
  ${flex({ justifyContent: "space-between" })}
  width: 100%;
  border-bottom: 1px solid ${color.adminGray300};
  padding-bottom: 25px;
`;

const TitleInput = styled.input`
  ${font.H2}
  color: ${color.gray900};
  width: 100%;

  &::placeholder {
    color: ${color.adminGray300};
  }
`;

const ContentTextarea = styled.textarea`
  ${font.B1};
  color: ${color.gray600};

  &::placeholder {
    color: ${color.adminGray300};
  }
  resize: none;
`;
