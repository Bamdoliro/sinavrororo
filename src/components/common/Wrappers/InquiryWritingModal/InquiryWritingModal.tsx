import { color } from "@/styles";
import { Button, Column, Row, Text, Textarea } from "@/ui";
import { flex } from "@/utils";
import { useState } from "react";
import styled from "styled-components";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}
const InquiryWritingModal = ({ isOpen, onClose, onConfirm }: Props) => {
  const [coverLetter, setCoverLetter] = useState("");
  const [isCoverLetterError, setIsCoverLetterError] = useState(false);

  const handleInquiryAnswerChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setCoverLetter(value);
    setIsCoverLetterError(value.trim() === "");
  };
  const handleConfirm = () => {
    if (coverLetter.trim() === "") {
      setIsCoverLetterError(true);
      return;
    }
    onConfirm();
  };

  return (
    <BlurBackground $isOpen={isOpen}>
      <StyledConfirm>
        <Column gap={16}>
          <Row justifyContent="space-between" alignItems="center">
            <Text fontType="Heading2" color={color.gray900}>
              답글 작성
            </Text>
          </Row>
          <Text fontType="B3" color={color.gray600}>
            항상 유저를 생각하는 마음을 잊지 마세요!
          </Text>
        </Column>
        <Column gap={64}>
          <Column
            gap={8}
            style={{ height: "100%", width: "100%" }}
            alignItems="flex-start"
          >
            <Textarea
              name="coverLetter"
              value={coverLetter}
              onChange={handleInquiryAnswerChange}
              placeholder="답글을 작성해주세요"
              isError={isCoverLetterError}
              errorMessage={
                isCoverLetterError ? "자기소개서를 입력해주세요." : ""
              }
            />
          </Column>
          <Row gap={16} justifyContent="flex-end">
            <Button styleType="TERTIARY" size="SMALL" onClick={onClose}>
              취소
            </Button>
            <Button size="SMALL" onClick={onConfirm}>
              작성 완료
            </Button>
          </Row>
        </Column>
      </StyledConfirm>
    </BlurBackground>
  );
};

export default InquiryWritingModal;

const BlurBackground = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props) => (props.$isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

const StyledConfirm = styled.div`
  ${flex({ flexDirection: "column", justifyContent: "space-between" })}
  width: 620px;
  padding: 32px;
  background-color: ${color.white100};
  border-radius: 16px;
  gap: 16px;
`;
