import { Column, Row, SearchInput, Button } from "@/ui";
import FaqTableHeader from "./FaqTableHeader/FaqTableHeader";
import FaqTableItem from "./FaqTableItem/FaqTableItem";
import styled from "styled-components";
import { color } from "@/styles";
import useCTAButton from "./FaqTable.hooks";
import { useFaqListQuery } from "@/services/faq/queries";

const FaqTable = () => {
  const { data: faqList } = useFaqListQuery();

  const { handleGoFaqPostPageButtonClick } = useCTAButton();

  return (
    <StyledFaqTableStyled>
      <Column style={{ width: "100%" }}>
        <TableSetting>
          <Column gap={20}>
            <Row justifyContent="space-between">
              <SearchInput placeholder="찾고 싶은 자주 묻는 질문을 검색해주세요" />
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
          {faqList &&
            faqList.map((item, index) => (
              <FaqTableItem
                key={`faq item ${index}`}
                id={item.id}
                title={item.title}
                date={item.updatedAt}
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
