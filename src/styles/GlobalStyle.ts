import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0; 
        padding: 0; 
        font-size: 10px; 
    }
    .outer-wrapper {
        max-width: 360px;
        margin: 0 auto;
    }
`;

export default GlobalStyle;
