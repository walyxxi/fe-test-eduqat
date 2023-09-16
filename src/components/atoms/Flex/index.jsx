import { styled } from "styled-components";

const Flex = styled.div`
  display: flex !important;
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  gap: ${({ gap }) => gap};
  width: ${({ w }) => w};
  margin: ${({ m }) => m};
  margin-top: ${({ mt }) => mt};
  margin-bottom: ${({ mb }) => mb};
  margin-right: ${({ mr }) => mr};
  margin-left: ${({ ml }) => ml};
  padding: ${({ p }) => p};
  border-width: ${({ borderWidth }) => borderWidth};
  border-style: ${({ borderStyle }) => borderStyle || "none"};
  border-color: ${({ theme, borderColor }) =>
    theme.colors[borderColor] || "none"};
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor] || "none"};
  border-radius: 6px;
  user-select: none;

  &:hover {
    background-color: ${({ theme, hoverColor }) =>
      theme.colors[hoverColor] || "transparent"};
  }
`;

export default Flex;
