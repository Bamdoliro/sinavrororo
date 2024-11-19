"use client";

import { ROUTES } from "@/constants/common/constants";
import styled from "styled-components";
import { color, font } from "@/styles";
import Row from "@/ui/Flex/Row";
import Profile from "./Profile/Profile";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <StyledHeader>
      <Row justifyContent="space-between">
        <Row alignItems="center" gap={12}>
          <Title onClick={() => router.push(ROUTES.MAIN)}>시나브로</Title>
          <Role>관리자</Role>
        </Row>
        <Row>
          <Profile />
        </Row>
      </Row>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  width: 100%;
  box-shadow: 0 1px 0 0 ${color.gray200};
  padding: 20px 108px 20px 20px;
`;

const Title = styled.div`
  ${font.H3}
  cursor: pointer;
`;

const Role = styled.div`
  ${font.B1}
  color: ${color.gray600};
`;
