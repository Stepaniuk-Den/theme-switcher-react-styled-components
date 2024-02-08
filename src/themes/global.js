import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  min-height: 100vh;
  font-family: "Roboto", sans-serif;
  /* font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.2;
  letter-spacing: 0.5px; */
  color: #FFFFFF;
  
  transition: background-color 0.25s linear, color 0.25s linear;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  display: block;
  height: auto;
  max-width: 100%;
}

button,
Link,
input {
  cursor: pointer;
  border: none;
  background-color: transparent;
  font: inherit;
}

a {
  text-decoration: none;
  color: inherit;
}

a:focus,
button:focus {
  outline: 1px solid transparent;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}

address {
  font-style: normal;
}
`;
