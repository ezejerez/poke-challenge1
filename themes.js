import { createGlobalStyle, withTheme } from 'styled-components';

export const lightTheme = {
  body: 'white',
  text: 'black',
};

export const darkTheme = {
  body: '#333333',
  text: 'white',
};

export const GlobalStyles = createGlobalStyle`
body {
  background-color: ${(props) => props.theme.body};
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;

  font-family: Pixellari;
}`;
