import { useFaqDetailQuery } from "@/services/faq/queries";
import { resizeTextarea } from "@/utils";
import { color, font } from "@/styles";
import { Button, Column, Row } from "@/ui";
import { flex } from "@/utils";
import type { ChangeEventHandler } from "react";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useFaqEditAction, useFaqDeleteAction } from "./FaqEdit.hooks";

interface Props {
  id: number;
}

const FaqEdit = ({ id }: Props) => {
  const { data: faqDetailData } = useFaqDetailQuery(id);

  const contentTextareaRef = useRef<HTMLTextAreaElement>(null);
  const [faqData, setFaqData] = useState({
    title: faqDetailData?.title ?? "",
    content: faqDetailData?.content ?? "",
  });

  const { handleFaqEditButtonClick } = useFaqEditAction(id, faqData);
  const { handleDeleteFaqButtonClick } = useFaqDeleteAction(id);

  const handleFaqDataChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const { name, value } = e.target;
    setFaqData({ ...faqData, [name]: value });

    resizeTextarea(contentTextareaRef);
  };

  useEffect(() => resizeTextarea(contentTextareaRef), []);

  return (
    <StyledFaqEdit>
      <Column gap={48}>
        <FaqHeader>
          <Column gap={20} style={{ width: "100%" }}>
            <TitleInput
              name="title"
              value={faqData.title}
              onChange={handleFaqDataChange}
              placeholder="제목을 입력해주세요"
            />
          </Column>
          <Row gap={16} alignItems="flex-end">
            <Button
              size="SMALL"
              width={156}
              styleType="QUATERNARY"
              onClick={handleDeleteFaqButtonClick}
            >
              삭제
            </Button>
            <Button size="SMALL" width={156} onClick={handleFaqEditButtonClick}>
              수정
            </Button>
          </Row>
        </FaqHeader>
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
    </StyledFaqEdit>
  );
};

export default FaqEdit;

const StyledFaqEdit = styled.div`
  ${flex({ flexDirection: "column" })}
  padding: 0px 7px;
`;

const FaqHeader = styled.div`
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
