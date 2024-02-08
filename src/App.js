import React, { useContext } from "react";
import styled, { ThemeProvider } from "styled-components";

import { ThemeContext } from "./contexts/ThemeContext";
import { lightTheme, darkTheme } from "./themes/theme";
import { GlobalStyles } from "./themes/global";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Wrapper>
        <GlobalStyles />
        <button onClick={toggleTheme}>Switch Theme</button>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
