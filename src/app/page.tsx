"use client";

import { flex } from "@/utils";
import { Suspense } from "react";
import styled from "styled-components";

const LoginContent = () => {
  return <StyledLoginPage ></StyledLoginPage>;
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
