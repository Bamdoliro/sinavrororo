"use client";

import { styled } from "styled-components";
import AppLayout from "@/layouts/AppLayout";
import { Text } from "@/ui";
import { color } from "@/styles";
import { flex } from "@/utils";
import { Button, Input, SearchInput, Dropdown } from "@/ui/index";
import Row from "@/ui/Flex/Row";

const Home = () => {
  return (
    <AppLayout>
      <StyledHome>
        <Title>
          <Text fontType="H1" color={color.gray900}>
            어드민 홈
          </Text>
          <Text fontType="B2" color={color.gray600}>
            시나브로에서 쌓인 업무를 볼 수 있어요.
          </Text>
        </Title>
        <Row>
          <Button icon="ADD_ICON" size="ICON">
            자주 묻는 질문 생성
          </Button>
          <Button size="SMALL">답글 남기기</Button>
          <Button size="LARGE" styleType="TERTIARY">
            문의 내용으로 이동
          </Button>
        </Row>
        <Row>
          <Input
            label="label"
            placeholder="placeholder"
            message="dkdj"
            icon="CALENDAR"
          ></Input>
          <SearchInput placeholder="찾고 싶은 "></SearchInput>
        </Row>
        <Row>
          <Dropdown
            data={[
              { value: "진행", label: "계쏙" },
              { value: "진행", label: "중단" },
              { value: "대기", label: "대기" },
              { value: "진행", label: "진행" },
            ]}
            onChange={() => {}}
            name="드랍다운"
            label="상태"
          ></Dropdown>
        </Row>
      </StyledHome>
    </AppLayout>
  );
};

export default Home;

const StyledHome = styled.div`
  ${flex({ flexDirection: "column" })}
  gap: 40px;
  width: 100%;
  height: 100%;
  padding: 3.75rem 4rem;
  overflow: auto;
`;

const Title = styled.div`
  ${flex({ flexDirection: "column" })}
`;
