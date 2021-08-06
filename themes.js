import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: 'white',
  text: 'black',
};

export const darkTheme = {
  body: '#333333',
  text: 'white',
};

export const ThemeStyles = createGlobalStyle`
body {
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
}`;
