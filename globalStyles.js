import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Pixellari';
  src: url('/fonts/Pixellari/Pixellari.eot') format('embedded-opentype');
  src: url('/fonts/Pixellari/Pixellari.woff') format('woff');
  src: url('/fonts/Pixellari/Pixellari.woff2') format('woff2');
  src: url('/fonts/Pixellari/Pixellari.ttf') format('truetype');
}

* {
  font-family: 'Pixellari';
}

html, body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
`;

// , div#__next

export default GlobalStyle;
