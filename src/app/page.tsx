"use client";

import { flex } from "@/utils";
import { Suspense } from "react";
import styled from "styled-components";
import Image from "next/image";
import { Button, Column, Input } from "@/ui";
import { color } from "@/styles";
import PreviewInput from "@/ui/Input/PreviewInput";

const LoginContent = () => {
  const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  const handleLogin = () => {};

  return (
    <StyledLoginPage>
      <LoginBox>
        <Column gap={64} alignItems="center" width={446}>
          <Image src="/logo.svg" width={245} height={80} alt="logo" />
          <Column gap={48} width="100%">
            <Column gap={16}>
              <Input
                label="아이디"
                width="100%"
                name="id"
                onChange={() => {}}
              />
              <PreviewInput
                label="비밀번호"
                width="100%"
                name="password"
                onChange={() => {}}
                onKeyDown={handleEnterKeyPress}
              />
            </Column>
            <Column gap="16px" alignItems="flex-end">
              <Button width="100%" onClick={handleLogin}>
                로그인
              </Button>
            </Column>
          </Column>
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
