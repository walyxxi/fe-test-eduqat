import { styled } from "styled-components";

const Flex = styled.div`
  display: flex !important;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ items }) => items};
  flex-wrap: ${({ wrap }) => wrap};
  gap: ${({ gap }) => gap};
  width: ${({ w }) => w};
  margin: ${({ m }) => m};
  margin-top: ${({ mt }) => mt};
  margin-bottom: ${({ mb }) => mb};
  margin-right: ${({ mr }) => mr};
  margin-left: ${({ ml }) => ml};
  padding: ${({ p }) => p};
  border-width: ${({ bdwidth }) => bdwidth};
  border-style: ${({ bdstyle }) => bdstyle};
  border-color: ${({ theme, bdcolor }) => theme.colors[bdcolor]};
  background-color: ${({ theme, bgcolor }) => theme.colors[bgcolor]};
  border-radius: 6px;
  user-select: none;

  &:hover {
    background-color: ${({ theme, hovercolor }) => theme.colors[hovercolor]};
  }
`;

export default Flex;
