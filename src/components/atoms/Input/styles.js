import { css } from "styled-components";

/* styles common to all buttons */
export const inputbase = css`
  border-width: 0 0 2px 0;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.primary};
  outline: none;
  font-size: ${({ theme }) => theme.fontSize.DEFAULT};
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray_100};
    opacity: 1;
  }

  &:-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.gray_100};
  }

  &::-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.gray_100};
  }
`;

/* size variants */
export const small = css`
  font-size: ${({ theme }) => theme.fontSize.md};
`;
export const large = css`
  font-size: ${({ theme }) => theme.fontSize.xl};
`;
