import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }
    body{
        width: 1050px;
        margin: auto;
        font-family: 'Noto Sans KR', sans-serif;
    };
    button{
        cursor: pointer;
        outline: none;
    };
    input{
        display: flex;
        outline: none;
        padding-left: 10px;
    };
    input:focus {
      outline: none;
    };
    
    a {
      text-decoration: none;
      color: black;
    };
`;
export default GlobalStyle;
