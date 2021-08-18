import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#fff',
  text: '#000',
};

export const darkTheme = {
  body: '#333333',
  text: '#fff',
};

export const ThemeStyles = createGlobalStyle`
body { 
  background: ${(props) => props.theme.body};
}`;
