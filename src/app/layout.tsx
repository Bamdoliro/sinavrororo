import Provider from "@/components/Provider";
import type { ReactNode } from "react";
import StyledComponentsRegistry from "@/lib/registry";
import QueryClientProvider from "@/services/QueryClientProvider";

export const metadata = {
  title: "시나브로 어드민",
  description: "밤돌이로의 시나브로 어드민 페이지입니다.",
};

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <QueryClientProvider>
            <Provider>{children}</Provider>
          </QueryClientProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
