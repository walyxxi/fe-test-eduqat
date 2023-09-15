import { styled } from "styled-components";
import Header from "./Header";
import { Container } from "../components";

const Content = styled.div`
  padding-top: ${({ theme }) => theme.header.height + 30}px;
`;

const Layout = ({ children, title }) => {
  return (
    <>
      <Header title={title} />
      <Container>
        <Content>{children}</Content>
      </Container>
    </>
  );
};

export default Layout;
