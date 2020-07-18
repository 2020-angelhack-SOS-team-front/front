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
        font-family: SpoqaHanSans;
        color: #333333;
    }
    .outer-wrapper {
        max-width: 360px;
        margin: 0 auto;
    }

    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
    }

    button {
        border: none;
        background-color: transparent;
    }
`;

export default GlobalStyle;
