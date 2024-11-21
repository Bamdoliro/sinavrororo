"use client";

import SideBar from "@/components/common/SideBar/SideBar";
import Header from "@/components/common/Header/Header";
import { flex } from "@/utils";
import type { ReactNode } from "react";
import { styled } from "styled-components";
import { Row } from "@/ui";

interface Props {
  children: ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <StyledAppLayout>
      <Header />
      <Row style={{ height: "calc(100vh - 92px)" }}>
        <SideBar />
        <Section>{children}</Section>
      </Row>
    </StyledAppLayout>
  );
};

export default AppLayout;

const StyledAppLayout = styled.div`
  ${flex({ flexDirection: "column" })}
  width: 100%;
  height: 100vh;
`;

const Section = styled.section`
  flex: 1;
  min-width: 0;
  overflow: auto;
`;
