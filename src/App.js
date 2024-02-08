import React, { useContext } from "react";
import styled, { ThemeProvider } from "styled-components";

import { ThemeContext } from "./contexts/ThemeContext";
import { lightTheme, darkTheme } from "./themes/theme";
import { GlobalStyles } from "./themes/global";

//====Загальний контейнер має бути зразу після ThemeProvider //
const Wrapper = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.textPrimary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
//====Загальний контейнер має бути зразу після ThemeProvider //

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Wrapper>
        <GlobalStyles />
        <div>
          {/* Пропсами прокидуємо {onClick} до потрібного рівня; 
          {theme} щоб можна було будувати логіку */}
          <button onClick={toggleTheme}>Switch Theme</button>
          <p>Color Text</p>
        </div>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
