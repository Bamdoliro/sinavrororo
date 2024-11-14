import AppLayout from "@/layouts/AppLayout";
import { styled } from "styled-components";

const main = () => {
  return (
    <AppLayout>
      <StyledMain>
        home
      </StyledMain>
    </AppLayout>
  );
};

export default main;

const StyledMain = styled.div`
  width: 100%;
  height: 100%;
`;
