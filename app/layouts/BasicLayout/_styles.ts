import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Montserrat', sans-serif;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

  @media (max-width: 576px) {
    .mobile-text-center {
        text-align: center;
    }
  }
`;
