"use client";

import InquiryDetailContent from "@/components/inquiry/InquiryDetailContent/InquiryDetailContent";
import { ROUTES } from "@/constants/common/constants";
import AppLayout from "@/layouts/AppLayout";
import { IconArrowLeft } from "@public/svgs";
import { color } from "@/styles";
import { flex } from "@/utils";
import Link from "next/link";
import { Text } from "@/ui";
import { Suspense } from "react";
import styled from "styled-components";

interface Props {
  params: { id: number };
}

const InquiryDetailPage = ({ params: { id } }: Props) => {
  return (
    <AppLayout>
      <StyledInquiryDetail>
        <InquiryDetailContainer>
          <DirectLink href={ROUTES.MAIN}>
            <IconArrowLeft width={32} height={32} />
            <Text fontType="Heading4" color={color.gray400}>
              뒤로가기
            </Text>
          </DirectLink>
          <Suspense fallback={<div>loading....</div>}>
            <InquiryDetailContent id={id} />
          </Suspense>
        </InquiryDetailContainer>
      </StyledInquiryDetail>
    </AppLayout>
  );
};

export default InquiryDetailPage;

const StyledInquiryDetail = styled.div`
  position: relative;
  ${flex({ flexDirection: "column" })}
  gap: 24px;
  width: 100%;
  min-height: 100vh;
  padding: 64px 60px 0px 60px;
`;

const InquiryDetailContainer = styled.div`
  border: 1px solid ${color.adminGray400};
  border-radius: 32px 32px 0px 0px;
  height: 100vh;
  padding: 64px 104px 0px 48px;
`;

const DirectLink = styled(Link)`
  ${flex({ alignItems: "center" })}
  gap: 8px;
`;
