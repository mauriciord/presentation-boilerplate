import { code as theme } from 'mdx-deck/themes'

console.log('theme', theme);

export default {
  ...theme,
  colors: {
    background: '#ffffff',
    text: '#212121',
    primary: '#2596D3',
  },
  font: 'Roboto, sans-serif',
  css: {
    ...theme.css,
    h1: {
      color: '#2596D3',
    },
    h2: {
      color: '#2596D3',
    },
    h3: {
      color: '#2596D3',
    },
  }
}
