import { styled } from "styled-components";

const Card = styled.div`
  width: 100%;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.gray_200};
  padding: ${({ p = "0" }) => p};
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.12) inset;
  background-color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ mb = "0" }) => mb};
  cursor: ${({ cursor }) => cursor};
  background-color: ${({ theme, bgcolor }) => theme.colors[bgcolor]};
`;

export default Card;
