import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  /* Using this inherit reset method means you can use content-box or padding-box without a universal selector overriding your CSS */
  html {
    box-sizing: border-box;
  }
  /* Only using * omits pseudo elements so specifically include these  */
  * , *:before, *:after {
    box-sizing: inherit;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: #000000;
    color: white;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
