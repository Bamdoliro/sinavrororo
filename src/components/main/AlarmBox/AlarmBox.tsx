import { ROUTES } from "@/constants/common/constants";
import { color } from "@/styles";
import { Button, Column, Row, Text } from "@/ui/index";
import { flex } from "@/utils";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const AlarmBox = () => {
  const router = useRouter();

  return (
    <StyledApplicationBox>
      <Column gap={12}>
        <Row justifyContent="flex-start">
          <Text fontType="Heading2" color={color.gray900}>
            알림 설정
          </Text>
        </Row>
        <Button
          size="LARGE"
          styleType="TERTIARY"
          style={{ whiteSpace: "nowrap" }}
          onClick={() => {
            router.push(ROUTES.ALARM);
          }}
        >
          알림 설정으로 이동
        </Button>
      </Column>
    </StyledApplicationBox>
  );
};

export default AlarmBox;

const StyledApplicationBox = styled.div`
  ${flex({ flexDirection: "column", justifyContent: "space-between" })}
  width: 480px;
  height: 180px;
  padding: 28px 32px;
  border: 1px solid ${color.gray200};
  border-radius: 12px;
  gap: 16px;
  cursor: pointer;
`;
