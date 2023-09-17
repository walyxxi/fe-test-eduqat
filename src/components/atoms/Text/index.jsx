import { styled } from "styled-components";

const Text = styled.span`
  color: ${({ theme, color }) => theme.colors[color]};
  font-size: ${({ theme, size }) => theme.fontSize[size]};
  font-weight: ${({ weight }) => weight || "normal"};
  margin-left: ${({ ml }) => ml};
  margin-right: ${({ mr }) => mr};
  padding: ${({ p }) => p || "0"};
  border-width: ${({ bdwidth }) => bdwidth || "0"};
  border-style: ${({ bdstyle }) => bdstyle || "none"};
  border-color: ${({ theme, bdcolor }) => theme.colors[bdcolor] || "none"};
`;

export default Text;
