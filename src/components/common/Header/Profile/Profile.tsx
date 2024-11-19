import { color, font } from "@/styles";
import { flex } from "@/utils";
import styled from "styled-components";
import { ProfileImg } from "@public/svgs";
import { useBooleanState, useOutsideClick } from "@/hooks";

const Profile = () => {
  const {
    value: isMenuOpen,
    toggle: toggleMenuOpen,
    setFalse: closeMenu,
  } = useBooleanState();

  const profileRef = useOutsideClick(closeMenu);

  const userData = {
    name: "어드민 5",
  };

  return (
    <StyledProfile ref={profileRef}>
      <MenuButton onClick={toggleMenuOpen}>
        <ProfileContainer>
          <ProfileImg />
        </ProfileContainer>
      </MenuButton>
      {isMenuOpen && (
        <MenuListBox>
          <MenuList>
            <NameMenu>
              <Name>{userData.name}</Name>
            </NameMenu>
            <MenuItemList>
              <MenuItem onClick={() => {}}>비밀번호 변경</MenuItem>
              <MenuItem onClick={() => {}}>로그아웃</MenuItem>
            </MenuItemList>
          </MenuList>
        </MenuListBox>
      )}
    </StyledProfile>
  );
};

export default Profile;

const StyledProfile = styled.div`
  ${flex({ flexDirection: "column", alignItems: "flex-end" })}
  min-width: 145px;
`;

const MenuButton = styled.button`
  ${flex({ alignItems: "center" })}
  cursor: pointer;
`;

const ProfileContainer = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  cursor: pointer;
`;

const MenuListBox = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  z-index: 2;
`;

const MenuList = styled.div`
  ${flex({ flexDirection: "column" })}
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 10px;
  border-radius: 12px;
  box-shadow: 1px 1px 8px 0px rgba(208, 208, 208, 0.5);
  padding: 12px 8px;
  gap: 8px;
`;

const NameMenu = styled.div`
  ${flex({ alignItems: "center" })}
  height: 52px;
  padding: 16px 8px;
  gap: 16px;
  border-bottom: 1px solid ${color.gray100};
`;

const Name = styled.p`
  ${font.Heading4};
  color: ${color.gray900};
  word-break: keep-all;
`;

const MenuItem = styled.button`
  ${font.B4}
  color: ${color.gray900};
  ${flex({ alignItems: "center" })}
  width: 100%;
  height: 48px;
  padding: 12px 8px;
  cursor: pointer;
  border-radius: 6px;

  &:hover {
    background-color: ${color.gray100};
  }
`;

const MenuItemList = styled.div``;
