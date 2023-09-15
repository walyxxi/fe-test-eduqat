import { styled } from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: ${({ alignItem }) => alignItem || "flex-start"};
  gap: ${({ gap }) => gap || "0"};
`;

export default Flex;
