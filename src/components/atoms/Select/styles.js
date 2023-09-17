import { css } from "styled-components";

/* styles common to all buttons */
export const selectbase = css`
  min-width: 180px;
  border-width: 0 0 2px 0;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.primary};
  outline: none;
  font-size: ${({ theme }) => theme.fontSize.DEFAULT};
`;

/* size variants */
export const small = css`
  font-size: ${({ theme }) => theme.fontSize.md};
`;
export const large = css`
  font-size: ${({ theme }) => theme.fontSize.xl};
`;
