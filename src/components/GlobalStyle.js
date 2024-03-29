import { createGlobalStyle } from "styled-components";
import "modern-normalize";

const GlobalStyle = createGlobalStyle`body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #010101;
  min-height: 100vh;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

ul, ol {
  list-style: none;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
}

img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }

a {
  text-decoration: none;
}

h1, h2, h3, h4, h5, h6, p {
  margin-top: 0;
  margin-bottom: 0;
}
`;
export default GlobalStyle;
