import { styled } from "styled-components";
import { IconArrowLeft } from "../assets/Icons";
import { Button, Container, Flex, StyledIcon, Text } from "../components";

const StyledHeader = styled.nav`
  position: fixed;
  width: 100%;
  height: ${({ theme }) => theme.header.height}px;
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 34px 0px rgba(39, 26, 73, 0.05);
  background-color: ${({ theme }) => theme.colors.white};
`;

const Header = ({ title }) => {
  return (
    <StyledHeader>
      <Container>
        <Flex alignItem="center" gap="10px">
          <Button size="small">
            <StyledIcon>
              <IconArrowLeft />
            </StyledIcon>
          </Button>
          <Text size="lg" weight="semibold">
            {title}
          </Text>
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
