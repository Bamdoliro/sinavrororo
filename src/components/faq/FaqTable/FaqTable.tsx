import { Column, Row, SearchInput, Button } from "@/ui";
import FaqTableHeader from "./FaqTableHeader/FaqTableHeader";
import FaqTableItem from "./FaqTableItem/FaqTableItem";
import styled from "styled-components";
import { color } from "@/styles";
import useCTAButton from "./FaqTable.hooks";

const FaqTable = () => {
  const FaqList = [
    {
      id: 1,
      title: "캐릭터가 제게 편지를 보내지 않아요",
      content: "슬픕니다...",
      date: "2024.09.25",
    },
    {
      id: 2,
      title: "캐릭터가 제게 편지를 보내지 않아요",
      content: "슬픕니다...",
      date: "2024.09.25",
    },
    {
      id: 3,
      title: "캐릭터가 제게 편지를 보내지 않아요",
      content: "슬픕니다...",
      date: "2024.09.25",
    },
    {
      id: 4,
      title: "캐릭터가 제게 편지를 보내지 않아요",
      content: "슬픕니다...",
      date: "2024.09.25",
    },
    {
      id: 5,
      title: "캐릭터가 제게 편지를 보내지 않아요",
      content: "슬픕니다...",
      date: "2024.09.25",
    },
  ];

  const { handleGoFaqPostPageButtonClick } = useCTAButton();

  return (
    <StyledFaqTableStyled>
      <Column style={{ width: "100%" }}>
        <TableSetting>
          <Column gap={20}>
            <Row justifyContent="space-between">
              <SearchInput placeholder="찾고 싶은 문의를 검색해주세요"></SearchInput>
              <Button
                icon="ADD_ICON"
                size="ICON"
                onClick={handleGoFaqPostPageButtonClick}
              >
                자주 묻는 질문 생성
              </Button>
            </Row>
          </Column>
        </TableSetting>
        <FaqTableHeader />
        <FaqTableItemContainer>
          {FaqList &&
            FaqList.map((item, index) => (
              <FaqTableItem
                key={`faq item ${index}`}
                id={item.id}
                title={item.title}
                date={item.date}
              />
            ))}
        </FaqTableItemContainer>
      </Column>
    </StyledFaqTableStyled>
  );
};

export default FaqTable;

const StyledFaqTableStyled = styled.div`
  border: 1px solid ${color.adminGray400};
  border-radius: 32px 32px 0 0;
  height: 100vh;
`;

const TableSetting = styled.div`
  padding: 40px 40px 32px 40px;
`;

const FaqTableItemContainer = styled.div`
  height: 100%;
  overflow: auto;
`;
