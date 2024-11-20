"use client";

import { ROUTES } from "@/constants/common/constants";
import { flex } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled, { css } from "styled-components";
import { color, font } from "@/styles";
import { Text } from "@/ui/index";
import {
  IconHomeBlack,
  IconHomeWhite,
  IconSupportBlack,
  IconSupportWhite,
  IconPhoneBlack,
  IconPhoneWhite,
} from "@public/svgs/index";
import { Row } from "@/ui";

const NAVIGATION_DATA = [
  {
    name: "문의 내역",
    route: ROUTES.INQUIRY,
    icon: <IconPhoneWhite />,
    activeIcon: <IconPhoneBlack />,
  },
  {
    name: "자주 묻는 질문",
    route: ROUTES.FAQ,
    icon: <IconSupportWhite />,
    activeIcon: <IconSupportBlack />,
  },
  {
    name: "알림",
    route: ROUTES.ALARM,
    icon: <IconHomeWhite />,
    activeIcon: <IconHomeBlack />,
  },
] as const;

const SideBar = () => {
  const pathName = usePathname();

  return (
    <StyledSideBar>
      <StyledHomeNavigation
        href={ROUTES.MAIN}
        $active={pathName == ROUTES.MAIN}
        key={"navigation main"}
      >
        <Row alignItems="center" gap={8}>
          {pathName === ROUTES.MAIN ? (
            <>
              <IconHomeBlack />
              <Text fontType="Heading3" color={color.gray900}>
                홈
              </Text>
            </>
          ) : (
            <>
              <IconHomeWhite />
              <Text fontType="Heading3" color={color.gray100}>
                홈
              </Text>
            </>
          )}
        </Row>
      </StyledHomeNavigation>
      <FuntionTtile>앱 내 기능</FuntionTtile>
      <SideNavigationBar>
        {NAVIGATION_DATA.map(({ route, name, icon, activeIcon }) => (
          <StyledLink
            key={`navigation ${name}`}
            href={route}
            $active={route === pathName}
          >
            <Row alignItems="center" gap={8}>
              {route === pathName ? activeIcon : icon}
              <Text fontType="Heading3">{name}</Text>
            </Row>
          </StyledLink>
        ))}
      </SideNavigationBar>
    </StyledSideBar>
  );
};

export default SideBar;

const StyledSideBar = styled.div`
  position: relative;
  ${flex({ flexDirection: "column" })}
  width: 240px;
  height: 100vh;
  background: ${color.gray900};
  flex-shrink: 0;
  gap: 40px;
`;

const StyledHomeNavigation = styled(Link)<{ $active: boolean }>`
  ${flex({ alignItems: "center" })}
  width: 100%;
  height: 64px;
  padding: 0 20px;
  margin-top: 40px;

  ${(props) =>
    props.$active &&
    css`
      width: 100%;
      background: ${color.primary};
    `}
`;

const FuntionTtile = styled.div`
  ${font.B3}
  padding-left: 20px;
  color: ${color.white80};
`;

const SideNavigationBar = styled.div``;

const StyledLink = styled(Link)<{ $active: boolean }>`
  ${font.Heading3}
  ${flex({ alignItems: "center" })}
  width: 100%;
  height: 56px;
  color: ${color.gray100};
  padding-left: 32px;
  background-color: ${color.gray900};

  ${(props) =>
    props.$active &&
    css`
      width: 100%;
      background: ${color.primary};
      color: ${color.gray900};
    `}
  box-sizing: border-box;
`;
