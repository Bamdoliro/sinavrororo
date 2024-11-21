import { color, font } from "@/styles";
import { Column, Button, Row } from "@/ui";
import { flex, resizeTextarea } from "@/utils";
import styled from "styled-components";
import { ChangeEventHandler, useRef, useState } from "react";

const FaqPost = () => {
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
    <StyledFaqDetailContent>
      <Column gap={48}>
        <FaqHeader>
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
    </StyledFaqDetailContent>
  );
};

export default FaqPost;

const StyledFaqDetailContent = styled.div`
  ${flex({ flexDirection: "column" })}
  padding-top: 28px;
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
