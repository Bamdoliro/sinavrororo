"use client";

import { styled } from "styled-components";
import AppLayout from "@/layouts/AppLayout";
import { Text } from "@/ui/index";
import color from "@/styles/color";
import flex from "@/styles/flex";

const Home = () => {
  return (
    <AppLayout>
      <StyledLogin>
        <Title>
          <Text fontType="H1" color={color.gray900}>
            어드민 홈
          </Text>
          <Text fontType="B2" color={color.gray600}>
            시나브로에서 쌓인 업무를 볼 수 있어요.
          </Text>
        </Title>
      </StyledLogin>
    </AppLayout>
  );
};

export default Home;

const StyledLogin = styled.div`
  ${flex({ flexDirection: "column" })}
  gap: 40px;
  width: 100%;
  height: 100%;
  padding: 64px 75px;
  overflow: auto;
`;

const Title = styled.div`
  ${flex({ flexDirection: "column" })}
`;
