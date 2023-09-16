import { styled } from "styled-components";

const Text = styled.text`
  color: ${({ theme, color }) => theme.colors[color]};
  font-size: ${({ theme, size }) => theme.fontSize[size]};
  font-weight: ${({ weight }) => weight || "normal"};
  margin-left: ${({ ml }) => ml || "0"};
  margin-right: ${({ mr }) => mr || "0"};
  padding: ${({ p }) => p || "0"};
  border-width: ${({ borderWidth }) => borderWidth || "0"};
  border-style: ${({ borderStyle }) => borderStyle || "none"};
  border-color: ${({ theme, borderColor }) =>
    theme.colors[borderColor] || "none"};
`;

export default Text;
