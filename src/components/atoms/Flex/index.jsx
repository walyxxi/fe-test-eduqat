import { styled } from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  gap: ${({ gap }) => gap || "0"};
  width: ${({ w }) => w};
  margin: ${({ m }) => m || "0"};
  margin-top: ${({ mt }) => mt || "0"};
  margin-bottom: ${({ mb }) => mb || "0"};
  margin-right: ${({ mr }) => mr || "0"};
  margin-left: ${({ ml }) => ml || "0"};
  padding: ${({ p }) => p || "0"};
  border-width: ${({ borderWidth }) => borderWidth || "0"};
  border-style: ${({ borderStyle }) => borderStyle || "none"};
  border-color: ${({ theme, borderColor }) =>
    theme.colors[borderColor] || "none"};
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor] || "none"};
  border-radius: 6px;
  user-select: none;

  &:hover {
    background-color: ${({ theme, hoverColor }) =>
      theme.colors[hoverColor] || "none"};
  }
`;

export default Flex;
