import type { InquiryStatus } from "@/types/inquiry/client";
import { color } from "@/styles";
import { Button, Column, Row, Text } from "@/ui";
import { flex } from "@/utils";
import type { ChangeEventHandler } from "react";
import { useState } from "react";
import { css, styled } from "styled-components";
import { useChangeInquiryStatusAction } from "./ChangeStatusModal.hooks";

interface Props {
  id: number;
  isOpen: boolean;
  onClose: () => void;
}

const StatusChangeModal = ({ id, isOpen, onClose }: Props) => {
  const [approvalStatus, setApprovalStatus] = useState<InquiryStatus | "">("");

  const handleApprovalRadioChange: ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setApprovalStatus(e.target.value as InquiryStatus);
  };

  const { handleChangeInquiryStatusButtonClick } = useChangeInquiryStatusAction(
    id,
    approvalStatus,
    onClose
  );

  return (
    <BlurBackground $isOpen={isOpen}>
      <StyledFinalScoreConfirm>
        <Row justifyContent="space-between">
          <Column>
            <Text fontType="Heading2" color={color.gray900}>
              문의 상태 변경
            </Text>
            <Text fontType="B3" color={color.gray600}>
              문의의 상태를 변경합니다.
            </Text>
          </Column>
        </Row>
        <Row gap={12} justifyContent="center">
          <CardRadio
            approvalStatusType="대기"
            $checked={approvalStatus === "대기"}
          >
            <Text
              fontType="Heading3"
              color={approvalStatus === "대기" ? color.white100 : color.gray900}
            >
              대기
            </Text>
            <input
              type="radio"
              name="approvalStatus"
              value="대기"
              onChange={handleApprovalRadioChange}
              hidden
            />
          </CardRadio>
          <CardRadio
            approvalStatusType="진행"
            $checked={approvalStatus === "진행"}
          >
            <Text
              fontType="Heading3"
              color={approvalStatus === "진행" ? color.white100 : color.gray900}
            >
              진행
            </Text>
            <input
              type="radio"
              name="approvalStatus"
              value="진행"
              onChange={handleApprovalRadioChange}
              hidden
            />
          </CardRadio>
          <CardRadio
            approvalStatusType="완료"
            $checked={approvalStatus === "완료"}
          >
            <Text
              fontType="Heading3"
              color={approvalStatus === "완료" ? color.white100 : color.gray900}
            >
              완료
            </Text>
            <input
              type="radio"
              name="approvalStatus"
              value="완료"
              onChange={handleApprovalRadioChange}
              hidden
            />
          </CardRadio>
        </Row>
        <Row gap={16} style={{ alignSelf: "flex-end" }}>
          <Button size="SMALL" styleType="TERTIARY" onClick={onClose}>
            취소
          </Button>
          <Button
            size="SMALL"
            styleType={approvalStatus ? "PRIMARY" : "DISABLED"}
            onClick={handleChangeInquiryStatusButtonClick}
          >
            상태 변경
          </Button>
        </Row>
      </StyledFinalScoreConfirm>
    </BlurBackground>
  );
};

export default StatusChangeModal;

const BlurBackground = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props) => (props.$isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

const StyledFinalScoreConfirm = styled.div`
  ${flex({ flexDirection: "column", justifyContent: "space-between" })}
  width: 694px;
  height: 350px;
  padding: 36px;
  border-radius: 16px;
  background: ${color.white100};
`;

const CardRadio = styled.label<{
  approvalStatusType: InquiryStatus;
  $checked: boolean;
}>`
  ${flex({ alignItems: "center", justifyContent: "center" })}
  width: 24%;
  height: 70px;
  padding: 12px 0;
  background-color: white;
  border-radius: 8px;
  border: 1px solid ${color.gray200};

  ${({ $checked, approvalStatusType }) =>
    $checked &&
    (approvalStatusType === "진행"
      ? css`
          border: 1px solid ${color.primary};
          background: ${color.primary};
        `
      : approvalStatusType === "대기"
      ? css`
          border: 1px solid ${color.primary};
          background: ${color.primary};
        `
      : approvalStatusType === "완료"
      ? css`
          border: 1px solid ${color.primary};
          background: ${color.primary};
        `
      : null)}
`;
