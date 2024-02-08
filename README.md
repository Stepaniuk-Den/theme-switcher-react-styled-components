Step 1: Setting Up the Project
Create a new React project using Create React App:

npx create-react-app theme-switcher
cd theme-switcher

Install the styled-components package:

npm install styled-components

Step 2: Defining the Themes
Create a new folder named `themes` inside the `src` folder and create a file called `theme.js` inside it. Define your light and dark themes as objects with the necessary properties:

// src/themes/theme.js

export const lightTheme = {
background: '#F7F8FA',
text: '#333333',
};

export const darkTheme = {
background: '#1D1E20',
text: '#FFFFFF',
};

Step 3: Creating the ThemeContext
Create a new folder named `contexts` inside the `src` folder and create a file called `ThemeContext.js` inside it. Set up the context and provider as follows:

// src/contexts/ThemeContext.js

import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
const [theme, setTheme] = useState('light');

const toggleTheme = () => {
setTheme(theme === 'light' ? 'dark' : 'light');
};

return (
<ThemeContext.Provider value={{ theme, toggleTheme }}>
{children}
</ThemeContext.Provider>
);
};

export { ThemeContext, ThemeProvider };

Step 4: Integrating ThemeProvider into the Application
In `src/index.js`, wrap the App component with the ThemeProvider:

// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import App from './App';

ReactDOM.render(
<React.StrictMode>
<ThemeProvider>
<App />
</ThemeProvider>
</React.StrictMode>,
document.getElementById('root')
);

Step 5: Creating Styled Components
In `src/App.js`, import styled from `styled-components` and create a Wrapper component. Use the theme prop to set the styles dynamically:

// src/App.js

import React, { useContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { ThemeContext, lightTheme, darkTheme } from './themes/theme';
import { GlobalStyles } from './themes/global';

//====Загальний контейнер має бути зразу після ThemeProvider //
const Wrapper = styled.div`  
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;`;

function App() {
const { theme, toggleTheme } = useContext(ThemeContext);

return (
<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
<Wrapper>
<GlobalStyles />
<div>
{/_ Пропсами прокидуємо {onClick} до потрібного рівня;
{theme} щоб можна було будувати логіку _/}
<button onClick={toggleTheme}>Switch Theme</button>
<p>Color Text</p>
</div>
</Wrapper>
</ThemeProvider>
);
}

export default App;

Step 6: Adding Global Styles
Create a file called `global.js` inside the `src/themes` folder and import `createGlobalStyle` from `styled-components`. Define the global styles as follows:

// src/themes/global.js

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`  
body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    transition: all 0.25s linear;
  }`;

⚠️ Please Note ⚠️
We're using `transition: all` property in the code example above, however, be aware that it can lead to unintended consequences and performance issues in your application. By applying transitions to all properties, any changes to an element's style will trigger a transition, even when it is not necessary or desired. This may result in excessive animations, poor user experience, and increased browser rendering workload.
To avoid these potential issues, it is recommended to specify the exact properties you want to animate. For example, instead of using `transition: all`, explicitly define the properties like `background-color` and `color`:
transition: background-color 0.25s linear, color 0.25s linear;
By being more selective with transitions, you can ensure better control over the application's animations and avoid negative impacts on its performance.
Now, your application has a working theme switcher that allows users to toggle between light and dark modes! You can customize the themes by adding more properties to the theme objects and creating additional styled-components.

Conclusion
In this article, we’ve demonstrated how to build a dynamic theme switcher for a React application using Styled Components, Context API, and Hooks. This approach ensures a smooth user experience, allowing users to customize the appearance of your application according to their preferences. You can expand on this concept to create more complex and feature-rich theme switchers.
