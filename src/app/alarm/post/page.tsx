"use client";

import AppLayout from "@/layouts/AppLayout";
import { flex } from "@/utils";
import styled from "styled-components";
import AlarmSetting from "@/components/alarm/AlarmSetting/AlarmSetting";

const FaqDetailPage = () => {
  return (
    <AppLayout>
      <StyledFaqDetail>
        <AlarmSetting />
      </StyledFaqDetail>
    </AppLayout>
  );
};

export default FaqDetailPage;

const StyledFaqDetail = styled.div`
  ${flex({ justifyContent: "center", alignItems: "center" })}
  position: relative;
  gap: 24px;
  width: 100%;
  min-height: calc(100vh - 92px);
`;
