import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.cdnfonts.com/css/sf-pro-display');

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'SF Pro Display', sans-serif;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
    margin: 0;                             
  }
`;

export default GlobalStyles;
