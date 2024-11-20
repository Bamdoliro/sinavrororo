import { color } from "@/styles";
import { Button, Column, Row, Text } from "@/ui";
import { flex } from "@/utils";
import styled from "styled-components";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}
const InquiryWritingModal = ({ isOpen, onClose, onConfirm }: Props) => {
  return (
    <BlurBackground $isOpen={isOpen}>
      <StyledConfirm>
        <Column
          style={{
            paddingBottom: 20,
            borderBottom: `1px solid ${color.gray200}`,
          }}
          gap={8}
        >
          <Row justifyContent="space-between" alignItems="center">
            <Text fontType="Heading2" color={color.gray900}>
              답글 작성
            </Text>
          </Row>
          <Text fontType="B3" color={color.gray600}>
            항상 유저를 생각하는 마음을 잊지 마세요!
          </Text>
        </Column>
        <Column
          gap={8}
          style={{ height: "100%", width: "100%", marginTop: 20 }}
          alignItems="flex-start"
        >
          <textarea></textarea>
        </Column>
        <Row gap={16} justifyContent="flex-end">
          <Button styleType="SECONDARY" size="SMALL" onClick={onClose}>
            취소
          </Button>
          <Button size="SMALL" onClick={onConfirm}>
            작성 완료
          </Button>
        </Row>
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
  width: 600px;
  padding: 40px;
  background-color: ${color.white100};
  border-radius: 16px;
`;
