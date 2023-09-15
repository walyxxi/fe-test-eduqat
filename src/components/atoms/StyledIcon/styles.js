import { css } from "styled-components";

/* styles common to all icons */
export const iconbase = css`
  svg {
    vertical-align: middle;
    color: ${({ theme, color }) => theme.colors[color]};
    width: 24px;
    height: 24px;
  }
`;

/* size variants */
export const small = css`
  svg {
    width: 20px;
    height: 20px;
  }
`;
export const large = css`
  svg {
    width: 32px;
    height: 32px;
  }
`;
