"use client";

import { flex } from "@/utils";
import { Suspense } from "react";
import styled from "styled-components";
import Image from "next/image";
import { Column, Row, Text } from "@/ui";
import { color } from "@/styles";
import { GoggleLogo } from "@public/svgs";

const LoginContent = () => {
  return (
    <StyledLoginPage>
      <LoginBox>
        <Column gap={64} alignItems="center">
          <Image src="/logo.svg" width={245} height={80} alt="logo" />
          <GoggleButton>
            <Row gap={12} alignItems="center">
              <GoggleLogo />
              <Text fontType="Heading4" color={color.gray900}>
                구글로 시작하기
              </Text>
            </Row>
          </GoggleButton>
        </Column>
      </LoginBox>
    </StyledLoginPage>
  );
};

const LoginPage = () => (
  <Suspense fallback={<div>loading...</div>}>
    <LoginContent />
  </Suspense>
);

export default LoginPage;

const StyledLoginPage = styled.div`
  ${flex({ justifyContent: "center" })}
  width: 100%;
  height: 100vh;
`;

const LoginBox = styled.div`
  ${flex({ flexDirection: "column", alignItems: "center" })}
  justify-content: center;
  width: 818px;
  height: 100%;
  background-color: ${color.white100};
`;

const GoggleButton = styled.div`
  background-color: ${color.adminGray100};
  cursor: pointer;
  padding: 16px 140px;
  border-radius: 6px;
`;
