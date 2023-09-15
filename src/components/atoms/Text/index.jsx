import { styled } from "styled-components";

const Text = styled.text`
  color: ${({ theme, color }) => theme.colors[color]};
  font-size: ${({ theme, size }) => theme.fontSize[size]};
  font-weight: ${({ weight }) => weight};
  margin-left: ${({ ml }) => ml};
`;

export default Text;
