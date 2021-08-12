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
  background: ${(props) => props.theme.body};
}`;
